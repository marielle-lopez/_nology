import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./MoviesList.module.scss";

const MovieList = ({ movies }) => {
  return (
    <section className={styles.list}>
      {movies &&
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={movie.image}
            director={movie.director}
            releaseYear={movie.releaseYear}
          />
        ))}
    </section>
  );
};

export default MovieList;
