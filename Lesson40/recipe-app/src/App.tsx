import { useEffect } from 'react';
import {Container} from '@mui/material';
import { AppRouter } from './AppRouter';
import { Recipe } from './modules/recipes/models';
import { Navbar } from './components/Navbar';
import { useDispatch } from 'react-redux';
import { updateRecipes } from './modules/recipes/recipesSlice';
import { login, logout } from './modules/user/userSlice';

export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const DB_URL =
			'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
		fetch(DB_URL)
			.then((data) => data.json())
			.then((recipeData: {meals: Recipe[]}) => 
			// setRecipes(recipeData.meals));
			dispatch(updateRecipes(recipeData.meals))
			);

	}, []);

	return (
		// Replaced our own Card component with Container compontn and restricted it's width to "md" value (900px) so that on large screen the content does not spread too wide. 
		<Container maxWidth='md'>
			<Navbar />
			<AppRouter />
		</Container>
	);
};
