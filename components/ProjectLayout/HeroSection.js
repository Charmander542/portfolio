import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = ({ video, image, title, subtitle, tags = [], gradient = ["#333", "#111"] }) => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      {video ? (
        <video
          autoPlay
          playsInline
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : image ? (
        <Image src={image} alt={title} fill className="object-cover" priority />
      ) : (
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)` }}
        />
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-gray-dark-5" />
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: `linear-gradient(135deg, ${gradient[0]}33 0%, transparent 60%)` }}
      />

      {/* Content */}
      <div className="relative z-10 section-container w-full flex flex-col items-start">
        {tags.length > 0 && (
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-0.5 rounded-full"
                style={{
                  color: '#FFFF00',
                  background: 'rgba(255,255,0,0.10)',
                  border: '1px solid rgba(255,255,0,0.28)',
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        )}

        <motion.h1
          className="text-5xl sm:text-7xl font-bold text-white leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="text-xl text-white/70 font-mono max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer select-none z-20"
        style={{ background: "none", border: "none", padding: 0 }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        aria-label="Scroll to content"
      >
        <span className="font-mono text-xs tracking-widest uppercase text-white/70">Scroll</span>
        <motion.svg
          width="20" height="20" viewBox="0 0 20 20" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          <path d="M4 7 L10 13 L16 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </motion.svg>
      </motion.button>
    </section>
  );
};

export default HeroSection;
