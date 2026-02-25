import SectionWrapper from "./SectionWrapper";

/**
 * Embeds a Spline 3D scene via iframe.
 * Get your embed URL from Spline → Share → Embed → copy the iframe src.
 */
const SplineSection = ({ url, label = "3D Model", title = "Interactive Model", height = "600px" }) => {
  if (!url) return null;

  return (
    <SectionWrapper label={label} title={title}>
      <div
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
