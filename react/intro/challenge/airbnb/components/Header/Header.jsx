import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <h1 className={styles.heading}>Airbnb</h1>
    </header>
  );
};

export default Header;
