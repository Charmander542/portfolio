import styles from "./Loader.module.scss";

/**
 * @param {string} [speed] CSS duration string for the progress bar sweep,
 *   e.g. "1.4s". Defaults to the stylesheet value (1.7s) when not provided.
 */
const Loader = ({ speed }) => {
  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <div className={styles.loader}>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className={styles.base}>
            <span></span>
            <div className={styles.face}></div>
          </div>
        </div>
        <div
          className={styles.progress}
          style={speed ? { "--loader-speed": speed } : undefined}
        ></div>
      </div>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
