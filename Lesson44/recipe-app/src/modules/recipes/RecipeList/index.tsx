import { Link } from "react-router-dom";
import { ListItem } from "../ListItem";
import { Grid } from "@mui/material";
import { selectorRecipes } from "../recipesSlice";
import { useSelector } from "react-redux";

export const RecipeList = () => {
  const recipes = useSelector(selectorRecipes);

  return (
    <Grid container spacing={4}>
      {recipes.map((recipe) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={recipe.idMeal}
          data-testid={"recipe-card"}
        >
          <Link
            to={`recipes/${recipe.idMeal}/details`}
            data-testid={"recipe-link"}
          >
            <ListItem
              strMealThumb={recipe.strMealThumb}
              strMeal={recipe.strMeal}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
