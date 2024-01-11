import styles from "./Button.module.scss";
import { useState } from "react";

const Button = ({ handleClick, mode, children }) => {
  const [selectedMode, setSelectedMode] = useState(styles.light);

  const handleSelectedMode = () => {
    if (mode === "dark") {
      setSelectedMode(styles.light);
    } else {
      setSelectedMode(styles.dark);
    }
  };

  return (
    <button
      className={selectedMode}
      onClick={() => {
        handleSelectedMode();
        handleClick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
