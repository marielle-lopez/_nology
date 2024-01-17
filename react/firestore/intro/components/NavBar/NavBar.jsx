import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  const navLinkClasses = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active_link}` : `${styles.link}`;
  };

  return (
    <nav className={styles.nav}>
      <NavLink className={navLinkClasses} to="/">
        Home
      </NavLink>
      <NavLink className={navLinkClasses} to="/add-movie">
        Add a Movie
      </NavLink>
    </nav>
  );
};
