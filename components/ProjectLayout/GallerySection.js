import Image from "next/image";
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
            <Image
              src={img.src}
              alt={img.alt || ""}
              fill
              className={`object-${img.fit || "cover"}`}
              style={img.rotate ? { transform: `rotate(${img.rotate}deg)` } : undefined}
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default GallerySection;
