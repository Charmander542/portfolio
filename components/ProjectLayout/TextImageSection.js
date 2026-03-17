import SectionWrapper from "./SectionWrapper";

const TextImageSection = ({
  label,
  title,
  children,
  image,
  imageAlt = "",
  reversed = false,
  objectFit = "cover",
}) => {
  const textCol = (
    <div className="flex flex-col justify-center">
      {children}
    </div>
  );

  const imageCol = (
    <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-gray-dark-1">
      {(() => {
        const lastDot = image.lastIndexOf(".");
        const base = lastDot !== -1 ? image.slice(0, lastDot) : image;
        const ext = lastDot !== -1 ? image.slice(lastDot + 1) : "jpg";
        const isPreconverted = ext === "webp" || ext === "avif";

        if (isPreconverted) {
          return (
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              decoding="async"
              className={`absolute inset-0 w-full h-full object-${objectFit}`}
            />
          );
        }

        return (
          <picture>
            <source
              type="image/avif"
              srcSet={`${base}-400.avif 400w, ${base}-800.avif 800w, ${base}-1200.avif 1200w`}
            />
            <source
              type="image/webp"
              srcSet={`${base}-400.webp 400w, ${base}-800.webp 800w, ${base}-1200.webp 1200w`}
            />
            <img
              src={`${base}.${ext}`}
              srcSet={`${base}-400.${ext} 400w, ${base}-800.${ext} 800w, ${base}-1200.${ext} 1200w`}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              decoding="async"
              alt={imageAlt}
              className={`absolute inset-0 w-full h-full object-${objectFit}`}
            />
          </picture>
        );
      })()}
    </div>
  );

  return (
    <SectionWrapper label={label} title={title}>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center`}>
        {reversed ? (
          <>
            {imageCol}
            {textCol}
          </>
        ) : (
          <>
            {textCol}
            {imageCol}
          </>
        )}
      </div>
    </SectionWrapper>
  );
};

export default TextImageSection;
