import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Recipe } from "../models";

export async function fetchRecipeDetails(id: string) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  const data = await res.json();
  return data?.meals[0] ? data?.meals[0] : null;
}

export const RecipeDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState<Recipe | null>(null);

  useEffect(() => {
    if (id) {
      const getData = async () => {
        await fetchRecipeDetails(id).then((result) => {
          setData(result);
        });
      };
      getData();
    }
  }, [id]);

  return data ? (
    <>
      <Typography variant="h3" component="h1" data-testid={"meal-title"}>
        {data.strMeal}
      </Typography>
      <Typography variant="body1" component="p">
        {data.strInstructions}
      </Typography>
      {data.strDrinkAlternate && (
        <Typography variant="h3" component="h1">
          Drink: {data.strDrinkAlternate}
        </Typography>
      )}
    </>
  ) : (
    <Typography data-testid={"meal-not-found"} variant="subtitle1">
      Recipe not found
    </Typography>
  );
};
