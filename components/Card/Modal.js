import React from "react";
import styles from  "./Modal.module.scss";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Modal = ({ data, close }) => {
  const {
    name,
    image,
    description,
    gradient,
    url,
    tech,
  } = data;

  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };

  return (
    <motion.div
      className={`${styles.modal} z-10`}
      variants={modalVariants}
      onClick={close}
    >
      <motion.img
        className={styles.modal__image}
        alt="real estate mansion"
        src={image}
        variants={imageVariants}
      ></motion.img>
      <motion.div className={styles.modal__info} variants={modalInfoVariants}>
        <motion.div
          className={styles.modal__description_wrapper}
          variants={modalRowVariants}
        >
          <p className={styles.modal__description}>{description}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
