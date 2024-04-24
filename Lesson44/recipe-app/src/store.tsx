import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./modules/recipes/recipesSlice";
import userReducer from "./modules/user/userSlice";
import { Recipe } from "./modules/recipes/models";
import { User } from "./modules/user/models";

export default configureStore({
  reducer: {
    recipes: recipesReducer,
    user: userReducer,
  },
});

export interface AppState {
  recipes: Recipe[];
  user: User;
}
