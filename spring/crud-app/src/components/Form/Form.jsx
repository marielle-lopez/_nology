import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import { useContext } from "react";
import { CategoriesContext } from "../../context/CategoriesContextProvider/CategoriesContextProvider";

const Form = ({ submit, defaultValues = {}, formType = "Create" }) => {
  const { categories } = useContext(CategoriesContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="titleInput">Title</label>
        <input type="text" id="titleInput" {...register("title")} />
      </div>
      <div>
        <label>Category</label>
        <select {...register("categoryId")}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Content</label>
        <textarea {...register("content")}></textarea>
      </div>
      <button>{formType === "Create" ? "Create Post" : "Update Post"}</button>
    </form>
  );
};

export default Form;
