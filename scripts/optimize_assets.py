#!/usr/bin/env python3
"""Shrink public/ originals and drop redundant sized PNG derivatives.

Keeps AVIF/WebP responsive variants. Converts large raster originals to
max-width JPEG (quality 82) and prints old->new path pairs for ref updates.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SEARCH_DIRS = [ROOT / "public" / "projects", ROOT / "public" / "research"]
MAX_WIDTH = 1920
JPEG_QUALITY = 82
MIN_BYTES = 250_000  # only touch originals larger than this
SOURCE_EXTS = {".png", ".jpg", ".jpeg", ".JPG", ".JPEG", ".PNG"}
DERIV_RE = re.compile(r"-(400|800|1200)$")


def is_derivative(path: Path) -> bool:
    return bool(DERIV_RE.search(path.stem))


def iter_originals():
    for root in SEARCH_DIRS:
        if not root.exists():
            continue
        for path in root.rglob("*"):
            if not path.is_file():
                continue
            if path.suffix not in SOURCE_EXTS and path.suffix.lower() not in {
                ".png",
                ".jpg",
                ".jpeg",
            }:
                continue
            if path.suffix.lower() not in {".png", ".jpg", ".jpeg"}:
                continue
            if is_derivative(path):
                continue
            # Skip top-level project thumbnails that are already small icons? still process by size
            yield path


def resize_max(im: Image.Image, max_w: int) -> Image.Image:
    w, h = im.size
    if w <= max_w:
        return im
    nh = int(h * (max_w / float(w)))
    return im.resize((max_w, nh), Image.LANCZOS)


def convert_original(src: Path) -> tuple[Path, Path] | None:
    """Return (old_path, new_path) when a rename/replace happened."""
    size = src.stat().st_size
    if size < MIN_BYTES:
        return None

    try:
        im = Image.open(src)
    except Exception as exc:
        print(f"[WARN] open failed {src}: {exc}", file=sys.stderr)
        return None

    im = ImageOps.exif_transpose(im)
    has_alpha = im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info)
    if has_alpha:
        # Flatten onto white for photo-like assets; keep PNG only if mostly UI with transparency
        alpha = im.convert("RGBA").getchannel("A")
        # If mostly opaque, flatten; else keep optimized PNG
        extrema = alpha.getextrema()
        mostly_opaque = extrema[0] >= 250
        if mostly_opaque:
            background = Image.new("RGB", im.size, (255, 255, 255))
            background.paste(im.convert("RGBA"), mask=alpha)
            im = background
            has_alpha = False
        else:
            im = im.convert("RGBA")
    else:
        im = im.convert("RGB")

    im = resize_max(im, MAX_WIDTH)

    if has_alpha:
        # Rare; just re-encode PNG smaller
        tmp = src.with_suffix(".opt.png")
        im.save(tmp, "PNG", optimize=True, compress_level=9)
        if tmp.stat().st_size < size:
            tmp.replace(src)
            print(f"[PNG] {src.relative_to(ROOT)} {size/1e6:.1f}MB -> {src.stat().st_size/1e6:.1f}MB")
        else:
            tmp.unlink(missing_ok=True)
            print(f"[SKIP] {src.relative_to(ROOT)} png not smaller")
        return None

    dest = src.with_suffix(".jpg")
    # Avoid clobbering a different existing jpg that isn't this conversion target
    tmp = dest.with_suffix(".opt.jpg")
    im.save(tmp, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)

    if dest.exists() and dest.resolve() != src.resolve():
        # Prefer smaller of existing jpg vs new
        if tmp.stat().st_size < dest.stat().st_size:
            tmp.replace(dest)
        else:
            tmp.unlink(missing_ok=True)
    else:
        tmp.replace(dest)

    old = src
    if src.resolve() != dest.resolve():
        src.unlink(missing_ok=True)

    print(
        f"[JPG] {old.relative_to(ROOT)} {size/1e6:.1f}MB -> "
        f"{dest.relative_to(ROOT)} {dest.stat().st_size/1e6:.1f}MB"
    )
    if old.suffix.lower() != ".jpg":
        return old, dest
    return None


def delete_sized_pngs() -> int:
    removed = 0
    bytes_freed = 0
    for root in SEARCH_DIRS:
        if not root.exists():
            continue
        for path in root.rglob("*-{400,800,1200}.png"):
            pass  # pathlib doesn't expand braces
        for path in list(root.rglob("*.png")):
            if not is_derivative(path):
                continue
            if not path.stem.endswith(("-400", "-800", "-1200")):
                continue
            bytes_freed += path.stat().st_size
            path.unlink()
            removed += 1
    print(f"[DEL] removed {removed} sized PNG derivatives ({bytes_freed/1e6:.1f} MB)")
    return removed


def main() -> None:
    renames: list[tuple[str, str]] = []
    for src in sorted(iter_originals()):
        result = convert_original(src)
        if result:
            old, new = result
            renames.append(
                (
                    "/" + old.relative_to(ROOT / "public").as_posix(),
                    "/" + new.relative_to(ROOT / "public").as_posix(),
                )
            )

    delete_sized_pngs()

    map_path = ROOT / "scripts" / "asset_renames.tsv"
    with map_path.open("w") as fh:
        for old, new in renames:
            fh.write(f"{old}\t{new}\n")
    print(f"[MAP] wrote {len(renames)} renames to {map_path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
