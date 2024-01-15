import styles from "./Projects.module.scss";

const Products = ({ result }) => {
  return (
    <>
      <section className={styles.container}>{result}</section>
    </>
  );
};

export default Products;