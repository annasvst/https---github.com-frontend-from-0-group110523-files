import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../modules/user/userSlice';
import recipesReducer from '../modules/recipes/recipesSlice';
import { Recipe } from '../modules/recipes/models';

export function mockedStore(recipes: Recipe[]) {
  return configureStore({
    reducer: {
      recipes: recipesReducer,
      user: userReducer,
    },
    preloadedState: {
      user: {
        loggedIn: false,
      },
      recipes: [...recipes],
    },
  });
}
