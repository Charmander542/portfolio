import Category from "./Category";
import Tech from "./Tech";
import Done from "./Done";
import styles from "./Sidebar.module.scss";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className={`${styles.sidebar}`}>
        <Category handleChange={handleChange} />
        <hr className="mb-[2rem] bg-white border-2 w-full"/>
        <Tech handleChange={handleChange} />
        <Done handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;