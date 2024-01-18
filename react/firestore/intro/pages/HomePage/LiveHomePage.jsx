import { useState, useEffect } from "react";
import { subscribeToMovies } from "../../services/movies";
import MovieList from "../../containers/MovieList/MovieList";

const LiveHomePage = () => {
  const [liveMovies, setLiveMovies] = useState(null);

  useEffect(() => {
    const unsubscribe = subscribeToMovies(setLiveMovies);

    return () => unsubscribe();
  }, []);

  return (
    <main>
      <h1>Live Movies Page</h1>
      {liveMovies && <MovieList movies={liveMovies} />}
    </main>
  );
};

export default LiveHomePage;
