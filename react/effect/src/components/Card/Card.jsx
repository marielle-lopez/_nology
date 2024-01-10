import { useEffect, useState } from "react";

const Card = () => {
  const [showPara, setShowPara] = useState(false);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Card mounted.");

    return () => {
      console.log("Card unmounted.");
    };
  }, []);

  return (
    <div>
      <h2>Heading</h2>
      {showPara && <p>Some text</p>}
      <button onClick={() => setShowPara(!showPara)}>Click</button>
      <button onClick={() => setNumber(number + 1)}>Add one</button>
    </div>
  );
};

export default Card;
