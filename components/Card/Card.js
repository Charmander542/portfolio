import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';

const ease = [0.25, 0.46, 0.45, 0.94];

const cardV    = { rest: { y: 0   }, hover: { y: -5,   transition: { duration: 0.18, ease } } };
const overlayV = { rest: { opacity: 0.85 }, hover: { opacity: 0.55, transition: { duration: 0.2 } } };
const accentV  = { rest: { scaleX: 0 }, hover: { scaleX: 1, transition: { duration: 0.22, ease } } };
const ctaV     = { rest: { opacity: 0.35, x: 0 }, hover: { opacity: 1, x: 4, transition: { duration: 0.18 } } };

const Card = ({ data }) => {
  const { name, image, done, tags = [], url } = data;
  const router = useRouter();
  const formattedName = url ?? `/projects/${name.toLowerCase().replace(/\s+/g, '_')}`;

  // Disable hover animations on touch/mobile devices
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: none), (max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <motion.a
      className="relative block rounded-2xl overflow-hidden cursor-pointer select-none"
      style={{ height: '22rem' }}
      variants={isMobile ? undefined : cardV}
      initial={isMobile ? false : "rest"}
      whileHover={isMobile ? undefined : "hover"}
      animate={isMobile ? undefined : "rest"}
      onClick={() => router.push(formattedName)}
    >
      {/* Image — static, no zoom */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay — lightens on hover so image breathes through */}
      <motion.div
        className="absolute inset-0"
        variants={overlayV}
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.04) 100%)',
        }}
      />

      {/* Yellow accent bar sweeps in from the left on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        variants={accentV}
        style={{ height: 2, background: '#FFFF00', transformOrigin: 'left' }}
      />

      {/* In Progress badge */}
      {!done && (
        <div
          className="absolute top-3 right-3 text-xs font-mono font-bold px-2.5 py-1 rounded-full"
          style={{ background: '#FFFF00', color: '#1c0f1f' }}
        >
          In Progress
        </div>
      )}

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-2.5">
          {tags.map((tag, i) => (
            <span
              key={i}
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
        </div>

        {/* Title */}
        <h3 className="text-white text-xl font-semibold leading-tight">{name}</h3>

        {/* CTA — slides right and brightens on hover */}
        <motion.div
          className="flex items-center gap-1 mt-1.5 text-xs font-mono"
          variants={ctaV}
          style={{ color: '#FFFF00' }}
        >
          View Project →
        </motion.div>
      </div>
    </motion.a>
  );
};

export default Card;
