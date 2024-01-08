import styles from "./Category.module.scss";

const Category = ({ title }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.icon}
        src="../../public/assets/placeholder-icon.png"
      />
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default Category;
