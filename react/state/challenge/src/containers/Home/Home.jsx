import { useState } from "react";
import Button from "../../components/Button/Button";
import styles from "./Home.module.scss";

const Home = () => {
  const [mode, setMode] = useState("light");
  const [oppositeMode, setOppositeMode] = useState("dark");
  const [classes, setClasses] = useState([styles.wrapper, styles.light]);

  const handleModeChange = () => {
    if (mode === "dark") {
      setClasses([styles.wrapper, styles.light]);
      setOppositeMode("dark");
      setMode("light");
    } else {
      setClasses([styles.wrapper, styles.dark]);
      setOppositeMode("light");
      setMode("dark");
    }
  };

  return (
    <>
      <div className={classes.join(" ")}>
        <h1>{mode} mode</h1>
        <Button handleClick={handleModeChange} mode={oppositeMode}>
          change to {oppositeMode} mode
        </Button>
      </div>
    </>
  );
};

export default Home;
