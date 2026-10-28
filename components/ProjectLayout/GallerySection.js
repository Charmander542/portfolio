import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const GallerySection = ({ label, title, images = [], cols = 2 }) => {
  const colClass = cols === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";

  return (
    <SectionWrapper label={label} title={title}>
      <div className={`grid grid-cols-1 ${colClass} gap-4`}>
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-gray-dark-1 bg-gray-dark-3"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            {(() => {
              const src = img.src;
              const lastDot = src.lastIndexOf(".");
              const base = lastDot !== -1 ? src.slice(0, lastDot) : src;
              const ext = lastDot !== -1 ? src.slice(lastDot + 1) : "jpg";
              const isPreconverted = ext === "webp" || ext === "avif";
              const fit = img.fit || "cover";
              const style = img.rotate
                ? { transform: `rotate(${img.rotate}deg)` }
                : undefined;

              if (isPreconverted) {
                return (
                  <img
                    src={src}
                    alt={img.alt || ""}
                    loading="lazy"
                    decoding="async"
                    className={`absolute inset-0 w-full h-full object-${fit}`}
                    style={style}
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    decoding="async"
                    alt={img.alt || ""}
                    className={`absolute inset-0 w-full h-full object-${fit}`}
                    style={style}
                  />
                </picture>
              );
            })()}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default GallerySection;
