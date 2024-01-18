import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import { addNewMovie } from "../../services/movies";
import { useNavigate } from "react-router-dom";

const AddMoviePage = () => {
  const navigate = useNavigate(); // useNavigate returns a function, which takes a path as a parameter

  const submitHandler = (data) => {
    addNewMovie(data)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((e) => console.warn(e.message));
  };

  return (
    <main>
      <AddMovieForm submitHandler={submitHandler} />
    </main>
  );
};

export default AddMoviePage;
