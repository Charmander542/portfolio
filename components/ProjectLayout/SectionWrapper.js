import { motion } from "framer-motion";

const SectionWrapper = ({ label, title, children, className = "", accent = false }) => {
  return (
    <motion.section
      className={`section-container py-16 sm:py-24 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {(label || title) && (
        <div className="mb-10">
          {label && (
            <p className="uppercase tracking-widest text-yellow font-mono text-xs mb-3">
              {label}
            </p>
          )}
          {title && (
            <h2 className={`text-4xl sm:text-5xl font-bold ${accent ? "text-gradient" : "text-white"}`}>
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
