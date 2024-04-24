import { useForm } from "react-hook-form";
import "./styles.css";
import { Categories, allCategories } from "../models";

interface FormValues {
  strMeal: string;
  strDrinkAlternate?: string;
  strCategory: Categories;
  strInstructions: string;
  ingredientsAndMeasures: string;
}

export function NewRecipe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onFormSubmit = (data: FormValues) => console.log(data);
  // const ingrs = 'Milk - 500ml, eggs - 2, sugar - 2 tbsp';

  return (
    <form
      noValidate
      className="recipe-form"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <label htmlFor="strMeal">Recipe Name</label>
      <input
        id="strMeal"
        type="text"
        {...register("strMeal", { required: true, minLength: 5 })}
      />
      {errors.strMeal?.type === "required" && (
        <span className="error-message">Recipe Name is required</span>
      )}
      {errors.strMeal && errors.strMeal.type === "minLength" && (
        <span className="error-message">
          Recipe Name should be at least 5 characters long
        </span>
      )}
      <label htmlFor="strDrinkAlternate">Drink Alternate</label>
      <input
        id="strDrinkAlternate"
        type="text"
        {...register("strDrinkAlternate")}
      />
      <label htmlFor="strCategory">Category</label>
      <select id="strCategory" {...register("strCategory", { required: true })}>
        <option value="">Select Category</option>
        {allCategories.map((category) => (
          <option
            key={category.replaceAll(" ", "")}
            value={category.replaceAll(" ", "")}
          >
            {category}
          </option>
        ))}
      </select>
      <label htmlFor="strInstructions">Instructions</label>
      <textarea
        id="strInstructions"
        {...register("strInstructions", {
          required: "Instructions are required",
          minLength: {
            value: 50,
            message: "Please enter Instructions at least 50 characters long",
          },
        })}
      />

      {errors.strInstructions && (
        <span className="error-message">{errors.strInstructions.message}</span>
      )}

      <label htmlFor="ingredientsAndMeasures">Ingredients and measures</label>
      <textarea
        placeholder="Milk - 500ml, eggs - 2, sugar - 2 tbsp"
        id="ingredientsAndMeasures"
        {...register("ingredientsAndMeasures", {
          required: "Ingredients and measures are required",
          minLength: {
            value: 50,
            message:
              "Ingredients and measures should be at least 50 characters long.",
          },
        })}
      />
      {errors.ingredientsAndMeasures && (
        <span className="error-message">
          {errors.ingredientsAndMeasures.message}
        </span>
      )}

      <button type="submit">Save Recipe</button>
    </form>
  );
}
