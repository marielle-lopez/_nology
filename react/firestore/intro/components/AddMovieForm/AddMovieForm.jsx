// import { useRef, useState } from "react";
// import { addMovie } from "../../services/movies";

// const AddMovieForm = () => {
//   const [successfulSubmit, setSuccessfulSubmit] = useState(false);
//   const formRef = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData(formRef.current);
//     const dataToSendToBackend = Object.fromEntries(formData);

//     console.log(dataToSendToBackend);

//     addMovie(dataToSendToBackend);
//     setSuccessfulSubmit(true);
//   };

//   return (
//     <form ref={formRef} onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="title">Title</label>
//         <input type="text" name="title" />
//       </div>
//       <div>
//         <label htmlFor="director">Director</label>
//         <input type="text" name="director" />
//       </div>
//       <div>
//         <label htmlFor="image">Image</label>
//         <input type="text" name="image" />
//       </div>
//       <div>
//         <label htmlFor="releaseYear">Release Year</label>
//         <input type="number" name="releaseYear" />
//       </div>
//       <div>
//         <label htmlFor="timesWatched">Times Watched</label>
//         <input type="number" name="timesWatched" />
//       </div>
//       <button type="submit">Add Movie</button>
//       {successfulSubmit && <p>Movie added to the database!</p>}
//     </form>
//   );
// };

// export default AddMovieForm;

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const AddMovieForm = ({ submitHandler }) => {
  const schema = z.object({
    title: z.string().min(1, "Title must be at least 1 character long"),
    director: z
      .string()
      .min(1, "Director name must be at least 1 character long"),
    releaseYear: z.coerce.number().min(1890).max(2030),
    image: z.string().url(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  // console.log(errors);

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && <p>{errors.title.message}</p>}
      </div>
      <div>
        <label htmlFor="director">Director: </label>
        <input type="text" id="director" {...register("director")} />
        {errors.director && <p>{errors.director.message}</p>}
      </div>
      <div>
        <label htmlFor="releaseYear">Release Year: </label>
        <input type="number" id="releaseYear" {...register("releaseYear")} />
        {errors.releaseYear && <p>{errors.releaseYear.message}</p>}
      </div>
      <div>
        <label htmlFor="image">Image Link: </label>
        <input type="text" id="image" {...register("image")} />
        {errors.image && <p>{errors.image.message}</p>}
      </div>
      <button type="submit">Add movie</button>
    </form>
  );
};

export default AddMovieForm;
