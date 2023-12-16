import React, { useState, useContext } from "react";
import Image from "next/image";
import styles from  "./Listing.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { CardOpenContext } from '../../pages/projects';

const Card = ({ data }) => {
  const { name, image, description, gradient, category } = data;  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`${styles.listing} rounded-3xl`}
      onClick={() => {
          setOpen(!open);
      }}
      whileHover={ open ? {} : { scale: 1.1 }}
      animate={open ? { width: '80%', hieght: "60%", position: 'fixed', margin: 0, zIndex: 1000 } : { position: 'relative', zIndex: 0, width: '25%', min_width: '300px', max_width: '400px'}}
    >
      <motion.div className={styles.listing__content}>
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
            className={styles.description}
          >
            <p>{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setOpen(false);
            }}
            className={styles.overlay}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Card;
