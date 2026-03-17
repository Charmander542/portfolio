import os
import sys
from pathlib import Path
from typing import Iterable, Tuple

from PIL import Image, ImageOps

# --------------------------------------------------------------------
# CONFIG
# --------------------------------------------------------------------

# Relative to repo root
SEARCH_DIRS = [
    Path("public/projects"),
    Path("public/research"),
]

# Source image extensions to process
SOURCE_EXTS = {".jpg", ".jpeg", ".png"}

# Target widths in pixels
TARGET_WIDTHS = [400, 800, 1200]

# Output formats
OUTPUT_FORMATS = [
    ("avif", "image/avif"),   # requires Pillow with AVIF support
    ("webp", "image/webp"),
    # Also emit resized originals (jpg/png) using the same size suffix
]


# --------------------------------------------------------------------
# UTILITIES
# --------------------------------------------------------------------

def iter_source_images(root_dirs: Iterable[Path]) -> Iterable[Path]:
    """Yield all source image files under the given directories."""
    for root in root_dirs:
        if not root.exists():
            continue
        for path in root.rglob("*"):
            if path.suffix.lower() not in SOURCE_EXTS or not path.is_file():
                continue

            # Skip any file that already looks like a generated derivative,
            # e.g. full-400.png, full-800.webp, full-1200.avif, etc.
            stem = path.stem  # e.g. "full-400"
            if stem.endswith(("-400", "-800", "-1200")):
                continue

            # Special rule for public/projects: skip images that live
            # directly in public/projects and only process those in
            # subdirectories (e.g. public/projects/hexapod/..., etc.).
            try:
                # Normalize to forward-slash string for comparison
                rel_root = root.as_posix()
            except Exception:
                rel_root = str(root)

            if rel_root.endswith("public/projects"):
                # Only process if the parent directory is not the root itself
                if path.parent == root:
                    continue

            yield path


def build_target_paths(src: Path) -> Iterable[Tuple[Path, int, str]]:
    """
    For a given source like foo/bar/image.jpg, yield:
      (path, width, format_ext)
    e.g. foo/bar/image-400.avif, image-800.webp, image-1200.jpg, etc.
    """
    stem = src.stem           # "image"
    parent = src.parent
    src_ext = src.suffix.lower().lstrip(".")  # "jpg" / "png"

    for width in TARGET_WIDTHS:
        # Size-specific stem: image-400, image-800, ...
        size_stem = f"{stem}-{width}"

        # New originals (jpg/png) with size suffix
        yield parent / f"{size_stem}.{src_ext}", width, src_ext

        # AVIF & WebP versions
        for fmt_ext, _mime in OUTPUT_FORMATS:
            yield parent / f"{size_stem}.{fmt_ext}", width, fmt_ext


def needs_conversion(src: Path, dst: Path) -> bool:
    """Return True if dst does not exist or is older than src."""
    if not dst.exists():
        return True
    return src.stat().st_mtime > dst.stat().st_mtime


def resize_image_keep_aspect(im: Image.Image, target_width: int) -> Image.Image:
    """Resize image to target_width (max), preserving aspect ratio. No upscaling."""
    w, h = im.size
    if w <= target_width:
        # No upscaling: just return original
        return im

    scale = target_width / float(w)
    new_size = (target_width, int(h * scale))
    return im.resize(new_size, Image.LANCZOS)


# --------------------------------------------------------------------
# MAIN CONVERSION LOGIC
# --------------------------------------------------------------------

def process_image(src: Path) -> None:
    """Generate all sizes & formats for a single source image."""
    try:
        im = Image.open(src)
    except Exception as e:
        print(f"[WARN] Failed to open {src}: {e}", file=sys.stderr)
        return

    im = ImageOps.exif_transpose(im)
    # Ensure RGB for consistent encoding (esp. for AVIF/WebP)
    if im.mode not in ("RGB", "RGBA"):
        im = im.convert("RGB")

    print(f"[INFO] Processing {src}")

    # Cache resized versions per width so we don't resize multiple times
    resized_by_width = {}

    for dst_path, width, fmt_ext in build_target_paths(src):
        if not needs_conversion(src, dst_path):
            # Already up-to-date
            continue

        # Get or create resized image for this width
        if width not in resized_by_width:
            resized_by_width[width] = resize_image_keep_aspect(im, width)
        resized = resized_by_width[width]

        dst_path.parent.mkdir(parents=True, exist_ok=True)

        save_kwargs = {}
        fmt_for_pillow = fmt_ext.upper()

        if fmt_ext in ("jpg", "jpeg"):
            fmt_for_pillow = "JPEG"
            save_kwargs.update({"quality": 85, "optimize": True, "progressive": True})
        elif fmt_ext == "png":
            fmt_for_pillow = "PNG"
            save_kwargs.update({"optimize": True})
        elif fmt_ext == "webp":
            fmt_for_pillow = "WEBP"
            save_kwargs.update({"quality": 80, "method": 6})
        elif fmt_ext == "avif":
            # AVIF support requires a recent Pillow build with AVIF,
            # or pillow-avif-plugin installed and imported before use.
            fmt_for_pillow = "AVIF"
            # You can tune quality/speed here if your build supports it:
            save_kwargs.update({"quality": 70})

        try:
            resized.save(dst_path, fmt_for_pillow, **save_kwargs)
            print(f"  -> {dst_path} ({width}px, {fmt_ext})")
        except Exception as e:
            print(f"[WARN] Failed to save {dst_path} as {fmt_for_pillow}: {e}", file=sys.stderr)


def main() -> None:
    repo_root = Path(__file__).resolve().parents[1] if "scripts" in str(__file__) else Path.cwd()
    roots = [repo_root / d for d in SEARCH_DIRS]

    print("[INFO] Scanning for source images...")
    images = list(iter_source_images(roots))
    if not images:
        print("[INFO] No source images found under:", ", ".join(str(p) for p in roots))
        return

    print(f"[INFO] Found {len(images)} source images.")
    for src in images:
        process_image(src)

    print("[DONE] Image conversion complete.")


if __name__ == "__main__":
    main()