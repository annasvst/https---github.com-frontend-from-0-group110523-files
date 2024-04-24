import { createSlice } from '@reduxjs/toolkit';
import { Recipe, RecipesSliceState } from './models';
import { useSelector } from 'react-redux';

interface RecipeAction {
	payload: Recipe[];
}

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: [] as Recipe[],
  reducers: {
    updateRecipes: (state, action: RecipeAction) => {
			const newRecipes = action.payload.filter(
				(payloadItem) =>
					!state.some((recipe) => recipe.idMeal === payloadItem.idMeal)
			);

			return [...state, ...newRecipes];
    },
  },
});


export const { updateRecipes } = recipesSlice.actions;
export const selectorRecipes = (state: RecipesSliceState) => state.recipes;

export default recipesSlice.reducer;