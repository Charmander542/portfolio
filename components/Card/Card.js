import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from  "./Listing.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const Card = ({ data }) => {
  const { name, image, description, gradient, category } = data;  
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <motion.li
      layoutId={`card-container-${name}`}
      className={`${styles.listing} rounded-3xl`}
      onClick={() => {
          setOpen(!open);
      }}
      whileHover={ open ? {} : { scale: 1.1 }}
      animate={open ? { width: '80%', height:'20rem', position: 'fixed', margin: 0, zIndex: 1000 } : { position: 'relative', zIndex: 0, width: '18rem', min_width: '300px', max_width: '400px'}}
    >
      <motion.div style={
        open ? {
          position: "absolute",
          left: "0",
          top: "0",
          width: "100%",
          height: "100%",
          background_color: "black",
          border_radius: "10px",
          overflow: "hidden",
        } : {
          position: "absolute",
          left: "0",
          top: "0",
          width: "100%",
          height: "100%",
          background_color: "black",
          border_radius: "10px",
          overflow: "hidden",
      }}>
        <motion.div className="w-full h-full overflow-hidden" style={{
              background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
            }}>
          <motion.img
            src="/project-bg.svg"
            alt="project"
            className="absolute w-full h-full top-0 left-0 object-cover opacity-30"
          />
          <Image
            src={image}
            alt={name}
            layout="fill"
            className={`${styles.listing__image} z-0`}
          />
          <motion.div className="pl-4 pt-3">
            <motion.span className="category">{category}</motion.span>
            <motion.h2
              layout
              className="font-medium text-3xl sm:text-4xl z-10 pl-2 overflow-hidden"
              style={{ transform: "translateZ(3rem)" }}
            >
              {name}
            </motion.h2>
          </motion.div>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setOpen(false);
            }}
            className="bg-black w-full h-full"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <motion.div
            layout
            className="text-white pt-0 pl-0"
            style={{ overflow: 'auto' }}
          >
            <p>{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export default Card;
