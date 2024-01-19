import { useState } from "react";

const Counter = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <div>
        <button
          disabled={count < 1}
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <h2>
          <span title="count">Count: {count}</span>
        </h2>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          setCount(initialValue);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
