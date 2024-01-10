import { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timeInt = setInterval(() => {
      setCurrentTime(new Date());
      console.log("Updated time.");
    }, 1000);

    return () => {
      clearInterval(timeInt);
    };
  }, []);

  return (
    <>
      <p>{currentTime.toLocaleTimeString()}</p>
    </>
  );
};

export default Clock;
