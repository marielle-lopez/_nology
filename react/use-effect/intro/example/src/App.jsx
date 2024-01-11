import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Clock from "./components/Clock/Clock";
import RandomUserCard from "./components/RandomUserCard/RandomUserCard";
import { fetchUserData } from "./data/getUserData";
import SearchBar from "./components/SearchBar/SearchBar";

import "./App.css";

function App() {
  // const [showCard, setShowCard] = useState(false);
  // const [showClock, setShowClock] = useState(false);

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(null);

  // make API call when page first loads
  useEffect(() => {
    // const wrapper = async () => {
    //   const data = await fetchUserData();
    //   setUserData(data);
    // };

    // wrapper();
    setLoading(true);
    fetchUserData().then((result) => {
      setUserData(result);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h1>useEffect</h1>
      {/* {showCard && <Card />}
      <button
        onClick={() => {
          setShowCard(!showCard);
        }}
      >
        Show card
      </button>
      {showClock && <Clock />}

      <button onClick={() => setShowClock(!showClock)}>
        {showClock ? "Hide clock" : "Show clock"}
      </button> */}
      {loading && <p>Loading...</p>}
      {userData && (
        <RandomUserCard
          name={userData.name}
          age={userData.age}
          city={userData.city}
        />
      )}
      <SearchBar />
    </>
  );
}

export default App;
