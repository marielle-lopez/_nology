import { deleteMovieById } from "../../services/movies";
import styles from "./MovieCard.module.scss";
import { Link } from "react-router-dom";

const MovieCard = ({
  id,
  image = "",
  title = "No title provided",
  director = "",
  releaseYear = "",
}) => {
  const handleClick = () => {
    deleteMovieById(id);
  };

  return (
    <article className={styles.card}>
      <div>
        <button onClick={handleClick}>Delete movie</button>
      </div>
      <img className={styles.image} src={image} alt="Movie poster" />
      <h3>{title}</h3>
      <p>{director}</p>
      <p>{releaseYear}</p>
      <Link to={`/movies/${id}`}>More Info</Link>
    </article>
  );
};

export default MovieCard;
