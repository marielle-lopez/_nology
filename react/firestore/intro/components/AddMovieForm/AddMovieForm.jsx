import { useRef, useState } from "react";
import { addMovie } from "../../services/movies";

const AddMovieForm = () => {
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const dataToSendToBackend = Object.fromEntries(formData);

    console.log(dataToSendToBackend);

    addMovie(dataToSendToBackend);
    setSuccessfulSubmit(true);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" />
      </div>
      <div>
        <label htmlFor="director">Director</label>
        <input type="text" name="director" />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input type="text" name="image" />
      </div>
      <div>
        <label htmlFor="releaseYear">Release Year</label>
        <input type="number" name="releaseYear" />
      </div>
      <div>
        <label htmlFor="timesWatched">Times Watched</label>
        <input type="number" name="timesWatched" />
      </div>
      <button type="submit">Add Movie</button>
      {successfulSubmit && <p>Movie added to the database!</p>}
    </form>
  );
};

export default AddMovieForm;
