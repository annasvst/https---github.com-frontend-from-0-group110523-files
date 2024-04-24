export interface Recipe {
	idMeal: string;
	strMeal: string;
	strDrinkAlternate?: string;
	strCategory: Categories;
	strArea: Areas;
	strInstructions: string;
	strMealThumb: string;
	strTags: string;
	strYoutube: string;
	strIngredient1: string;
	strIngredient2: string;
	strIngredient3: string;
	strIngredient4?: string;
	strIngredient5?: string;
	strMeasure1: string;
	strMeasure2: string;
	strMeasure3: string;
	strMeasure4?: string;
	strMeasure5?: string;
	strSource: string;
	strImageSource?: string;
	strCreativeCommonsConfirmed?: string;
	dateModified?: string;
}

export enum Categories {
    Main = 'Main',
    Dessert = 'Dessert',
    Beef = 'Beef',
    Chicken = 'Chicken'
};

export const allCategories = [Categories.Beef,Categories.Chicken, Categories.Dessert]; 

export enum Areas {
    British = 'British',
    Indian = 'Indian',
    Canada = 'Canada',
    Malaysian = 'Malaysian',
    Turkish = 'Turkish',
};

export enum RecipeActionType {
	UPDATE = 'update',
	DELETE_ALL = 'delete_all',
}

export interface RecipeAction {
	type: RecipeActionType;
	payload: Recipe[];
}

export interface RecipesSliceState {
  recipes: Recipe[];
}
