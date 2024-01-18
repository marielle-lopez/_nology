import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getMovieById, incrementTimesWatched } from "../../services/movies";
import styles from "./MoviePage.module.scss";
// import { RefreshContext } from "../../context/RefreshContextProvider";

const MoviePage = () => {
  // to access something from the URL, we use the useParams hook
  const pathVariables = useParams();

  const id = pathVariables.id;

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const { refresh, setRefresh } = useContext(RefreshContext);

  useEffect(() => {
    setLoading(true);
    getMovieById(id)
      .then((response) => setMovie(response))
      .catch((e) => setError(e.message))
      .finally(setLoading(false));
  }, [id]);

  const handleIncrement = () => {
    incrementTimesWatched(id);
    // .then(() => {
    //   setRefresh(refresh + 1);
    // })
    // .catch((e) => console.warn(e.message));
  };

  return (
    <main>
      {loading && <p>Loading...</p>}

      {!loading && error && <p>{error}</p>}

      {!loading && !error && movie && (
        <>
          <h1>{movie.title}</h1>
          <div className={styles.wrapper}>
            <img src={movie.image} alt="Movie poster" />
            <div className={styles.info}>
              <p>Directed by {movie.director}</p>
              <p>Released in {movie.releaseYear}</p>
              <p>
                Watched {movie.timesWatched} time
                {movie.timesWatched !== 1 ? "s" : ""}
              </p>
              <button onClick={handleIncrement}>Increment</button>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default MoviePage;
