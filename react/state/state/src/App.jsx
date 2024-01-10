import { useState } from "react";

import "./App.scss";
import Counter from "./components/Counter/Counter";
import Button from "./components/Button/Button";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResultList from "./containers/SearchResultList";

function App() {
  // const data = ["chocolate", "cheese", "mango"];

  // const [randomWord, setRandomWord] = useState(data[0]);

  // const handleBtnClick = () => {
  //   console.log("Hello there!");
  // };

  // const handleRandomWordSelection = () => {
  //   const randomIndex = Math.floor(Math.random() * 3);
  //   setRandomWord(data[randomIndex]);
  // };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <h1>React State</h1>
      {/* <Counter />
      <Button handleClick={handleBtnClick}>Click me!</Button>
      <Button handleClick={handleRandomWordSelection}>Get random food</Button>
      <p>{randomWord}</p> */}
      <SearchBar setSearchTerm={setSearchTerm} />
      <SearchResultList searchTerm={searchTerm} />
    </>
  );
}

export default App;
