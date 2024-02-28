import styles from "./MainWrapper.module.scss";

const MainWrapper = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default MainWrapper;
