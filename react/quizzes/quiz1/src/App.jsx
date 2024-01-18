import "./App.css";

import { useState, useEffect } from "react";

// Question 14
const Counter = ({ initial }) => {
  const [count, setCount] = useState(initial ?? 0);

  // let count = initial ?? 0;

  const handleClick = () => setCount(count + 1);

  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};

// Question 15
const Quantity = () => {
  const [qty, setQty] = useState(100);

  const handleIncrement = () => {
    setQty(qty + 2);
    // onChange(qty);
  };

  const handleDecrement = () => {
    setQty(qty - 2);
    // onChange(qty);
  };

  return (
    <>
      <div>
        <button onClick={handleDecrement}>-2</button>
        {qty}
        <button onClick={handleIncrement}>+2</button>
      </div>
    </>
  );
};

// Question 16
const Updates = () => {
  let [count, setCount] = useState(100);
  let [updates, setUpdates] = useState(0);

  useEffect(() => {
    setUpdates(updates + 1);
  }, [count, updates]);

  const handleClick = () => setCount(count + 1);

  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};

// Question 17
const Facts = () => {
  const [facts, setFacts] = useState(null);

  useEffect(() => {
    const setData = async () => {
      const response = await fetch("https://catfact.ninja/facts");
      const data = await response.json();
      setFacts(data.data);
    };

    setData();
  });

  return (
    <>
      {facts &&
        facts.map((fact, index) => {
          return <p key={index}>{fact.fact}</p>;
        })}
    </>
  );
};

// Question 18
const Students = () => {
  const [students] = useState([
    { name: "Harrison", browniePoints: Math.floor(Math.random() * 100) },
    { name: "Sandra", browniePoints: Math.floor(Math.random() * 100) },
  ]);

  return (
    <>
      {students.map((student) => (
        <p>
          {student.name} - {student.browniePoints}
        </p>
      ))}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <div>
        {/* <Counter initial={1} /> */}
        <Quantity />
      </div>
    </div>
  );
}

export default App;
