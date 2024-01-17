import { useState, useEffect } from "react";
import { getAllMovies } from "../../services/movies";
import MovieList from "../../containers/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllMovies().then((response) => {
      setMovies(response);
      setLoading(false);
    });
  }, []);

  return (
    <main>
      <h1>Firestore Movie Collection</h1>
      {loading && <p>Loading...</p>}
      {!loading && movies && <MovieList movies={movies} />}
    </main>
  );
};

export default HomePage;
