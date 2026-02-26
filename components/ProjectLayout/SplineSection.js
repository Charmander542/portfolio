import { useRef, useEffect } from "react";
import SectionWrapper from "./SectionWrapper";

/**
 * Embeds a Spline 3D scene via iframe.
 * Get your embed URL from Spline → Share → Embed → copy the iframe src.
 */
const SplineSection = ({ url, label = "3D Model", title = "Interactive Model", height = "600px" }) => {
  const wrapperRef = useRef(null);
  // Track hover state via ref so no re-renders are needed
  const hoveringRef = useRef(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    // Always-on document listener — only blocks scroll while cursor is inside the wrapper.
    // Using a persistent listener avoids the race condition where attach/detach timing
    // causes the handler to miss wheel events when the cursor moves into the iframe.
    const stopWheel = (e) => {
      if (hoveringRef.current) e.preventDefault();
    };
    const stopTouch = (e) => {
      if (hoveringRef.current) e.preventDefault();
    };

    const onEnter = () => { hoveringRef.current = true; };
    const onLeave = () => { hoveringRef.current = false; };

    document.addEventListener("wheel", stopWheel, { passive: false });
    document.addEventListener("touchmove", stopTouch, { passive: false });
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      document.removeEventListener("wheel", stopWheel);
      document.removeEventListener("touchmove", stopTouch);
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
          loading="lazy"
          className="w-full h-full"
        />
      </div>
      <p className="mt-3 text-xs font-mono text-gray-light-4 text-center">
        Drag to rotate · Scroll to zoom · Right-click to pan
      </p>
    </SectionWrapper>
  );
};

export default SplineSection;
