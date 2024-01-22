import { useState } from "react";
import Card from "../components/Card/Card";

import "./App.css";
import SearchBar from "../components/SearchBar/SearchBar";
import { SearchContext } from "../context/SearchContextProvider";
import SearchContextProvider from "../context/SearchContextProvider";
import Wrapper from "../containers/Wrapper";

function App() {
  const submit = (value) => {
    console.log(value);
  };

  return (
    <SearchContextProvider>
      <Wrapper />
      {/* <Card /> */}
    </SearchContextProvider>
  );
}

export default App;
