import Button from "../Button/Button";
import styles from "./Counter.module.scss";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.wrapper}>
      <Button handleClick={handleDecrement}>-</Button>
      <p>{count}</p>
      <Button handleClick={handleIncrement}>+</Button>
    </div>
  );
};

export default Counter;
