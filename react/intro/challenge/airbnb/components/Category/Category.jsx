import styles from "./Category.module.scss";

const Category = ({ title, imgSrc }) => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={`../assets/${imgSrc}`} />
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default Category;
