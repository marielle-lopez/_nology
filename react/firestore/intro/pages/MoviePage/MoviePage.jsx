import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "../../services/movies";
import styles from "./MoviePage.module.scss";

const MoviePage = () => {
  // to access something from the URL, we use the useParams hook
  const pathVariables = useParams();

  const id = pathVariables.id;

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getMovieById(id)
      .then((response) => setMovie(response))
      .catch((e) => setError(e.message))
      .finally(setLoading(false));
  }, [id]);

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
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default MoviePage;
