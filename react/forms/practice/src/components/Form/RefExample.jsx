import { useRef, useState } from "react";

const RefExample = () => {
  const [inputVal, setInputVal] = useState("");
  const number = useRef(0);

  const handleClick = () => {
    number.current++;
  };

  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <p>{number.current}</p>
      <button onClick={handleClick}>Increment number</button>
    </div>
  );
};

export default RefExample;
