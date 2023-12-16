import React from "react";
import Image from "next/image";
import styles from  "./Listing.module.scss";
import { motion } from "framer-motion";

const Listing = ({ data, open }) => {
  const { name, image, description, gradient, url, tech, category} = data;

  return (
    <motion.div className={`${styles.listing} rounded-3xl`} onClick={open} whileHover={{ scale: 1.1 }}>
      <div className={styles.listing__content}>
        <div className="w-full h-full overflow-hidden" style={{
              background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
            }}>
              <img
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
            <div className="pl-4 pt-3">
            <span className="category">{category}</span>
            <h2
              className="font-medium text-3xl sm:text-4xl z-10 pl-2 overflow-hidden"
              style={{ transform: "translateZ(3rem)" }}
            >
              {name}
            </h2>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Listing;
