import React from "react";
import styles from "./Overlay.module.scss";
import { motion } from "framer-motion";

const Overlay = ({ children, close }) => {
  const variants = {
    open: { backgroundColor: "rgba(0,0,0,0.6)" },
    closed: { backgroundColor: "rgba(0,0,0,0)" },
  };

  return (
    <motion.div
      className={styles.overlay}
      onClick={close}
      variants={variants}
      initial={"closed"}
      animate={"open"}
      exit={"closed"}
      key="overlay"
    >
      {children}
    </motion.div>
  );
};

export default Overlay;
