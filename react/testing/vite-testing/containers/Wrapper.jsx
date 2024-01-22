import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContextProvider";
import SearchBar from "../components/SearchBar/SearchBar";
import { getJokesBySearch } from "../services/joke-services";
import JokeLoader from "./JokeLoader/JokeLoader";

const Wrapper = () => {
  const { setSearchValue, searchValue } = useContext(SearchContext);
  const formSubmit = (value) => {
    console.log("Searched for " + value);
    setSearchValue(value);
  };

  // useEffect(() => {
  //   getJokesBySearch(searchValue)
  //     .then((res) => console.log(res))
  //     .catch((e) => console.log(e.message));
  // }, [searchValue]);

  return (
    <>
      <SearchBar formSubmit={formSubmit} />
      <JokeLoader />
    </>
  );
};

export default Wrapper;
