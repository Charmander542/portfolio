import { useRef, useEffect } from "react";
import SectionWrapper from "./SectionWrapper";

/**
 * Generic iframe embed with scroll lock.
 * Works for Altium Gerber viewer, Fusion 360, YouTube, or any iframe URL.
 * Prevents page scroll while the cursor is inside the viewer.
 */
const EmbedSection = ({
  url,
  label = "Embed",
  title = "Interactive Viewer",
  height = "600px",
  hint = "Scroll to zoom · Click and drag to pan",
}) => {
  const wrapperRef = useRef(null);
  const hoveringRef = useRef(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const stopWheel = (e) => { if (hoveringRef.current) e.preventDefault(); };
    document.addEventListener("wheel", stopWheel, { passive: false });
    const onEnter = () => { hoveringRef.current = true; };
    const onLeave = () => { hoveringRef.current = false; };
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      document.removeEventListener("wheel", stopWheel);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      hoveringRef.current = false;
    };
  }, []);

  if (!url) return null;

  return (
    <SectionWrapper label={label} title={title}>
      <div
        ref={wrapperRef}
        className="w-full rounded-2xl overflow-hidden border border-gray-dark-1 bg-gray-dark-3"
        style={{ height }}
      >
        <iframe
          src={url}
          frameBorder="0"
          width="100%"
          height="100%"
          title={title}
          allow="autoplay; fullscreen"
          allowFullScreen
          loading="lazy"
          className="w-full h-full"
        />
      </div>
      {hint && (
        <p className="mt-3 text-xs font-mono text-gray-light-4 text-center">{hint}</p>
      )}
    </SectionWrapper>
  );
};

export default EmbedSection;
