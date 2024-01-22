import { SearchContext } from "../../context/SearchContextProvider";
import { getJokesBySearch } from "../../services/joke-services";
import { useEffect, useState, useContext } from "react";
import JokeList from "../JokeList/JokeList";
import Error from "../../components/Error/Error";

const JokeLoader = () => {
  const { searchValue } = useContext(SearchContext);
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState(null);
  const [fetchState, setFetchState] = useState("DEFAULT");

  useEffect(() => {
    if (searchValue === null) {
      return;
    }

    setFetchState("LOADING");

    getJokesBySearch(searchValue)
      .then((jokes) => {
        setFetchState("SUCCESS");
        setJokes(jokes);
      })
      .catch((e) => {
        setFetchState("FAILURE");
        setError(e);
      });
  }, [searchValue]);

  return (
    <>
      {fetchState === "DEFAULT" && <p>Enter a search term</p>}

      {fetchState === "LOADING" && (
        <p>Searching for jokes about {searchValue}</p>
      )}

      {fetchState === "SUCCESS" && <JokeList jokes={jokes} />}

      {fetchState === "FAILURE" && <Error message={error.message} />}
    </>
  );
};

export default JokeLoader;
