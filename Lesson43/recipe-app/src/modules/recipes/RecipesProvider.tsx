import {createContext, useReducer, useContext} from 'react';
import { type Recipe, type RecipeAction, RecipeActionType } from './models';
import type { ReactNode, Dispatch } from 'react';


interface RecipesProviderProps {
	children: ReactNode;
	initialState?: Recipe[];
}

export const RecipesContext = createContext<Recipe[]>([]);
export const RecipesDispatchContext = createContext<Dispatch<RecipeAction> | null>(null);

export const RecipesProvider = ({children, initialState}: RecipesProviderProps) => {
	const [recipes, dispatch] = useReducer(userReducer, initialState ?? []);

	return (
		<RecipesContext.Provider value={recipes}>
			<RecipesDispatchContext.Provider value={dispatch}>
				{children}
			</RecipesDispatchContext.Provider>
		</RecipesContext.Provider>
	)
};


function userReducer (state: Recipe[], action: RecipeAction) {
	switch (action.type) {
		case RecipeActionType.UPDATE: {
			const newRecipes = action.payload.filter(
				(payloadItem) =>
					!state.some((recipe) => recipe.idMeal === payloadItem.idMeal)
			);

			return [...state, ...newRecipes];
		}
		case RecipeActionType.DELETE_ALL: {
			return ([]);
		}

		default: throw Error(`Action type ${action.type} is not supported`);
	}
};

export const useRecipes = () => useContext(RecipesContext);
export const useRecipesDispatch = () => useContext(RecipesDispatchContext);



