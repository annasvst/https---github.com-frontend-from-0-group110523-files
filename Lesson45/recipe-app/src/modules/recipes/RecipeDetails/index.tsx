import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Recipe } from '../models';
import { fetchRecipeDetails } from './data-fetching';

export const RecipeDetails = () => {
  let { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async (id: string) => {
      const result = await fetchRecipeDetails(id);
      if (result) {
        setRecipe(result);
      }
    };

    if (id) {
      getData(id);
    }
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return recipe ? (
    <Stack>
      <Typography variant='h3' component='h1' data-testid={'meal-title'}>
        {recipe.strMeal}
      </Typography>
      <Typography variant='body1' component='p'>
        {recipe.strInstructions}
      </Typography>
      {recipe.strDrinkAlternate && (
        <Typography variant='h3' component='h1'>
          Drink: {recipe.strDrinkAlternate}
        </Typography>
      )}

      <Button color='primary' data-testid='go-back-btn' onClick={handleGoBack}>
        Go back
      </Button>
    </Stack>
  ) : (
    <div data-testid='loading-indicator'>Loading...</div>
  );
};
