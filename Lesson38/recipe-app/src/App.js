import { useState, useEffect } from 'react';
import {Container} from '@mui/material';
import { AppRouter } from './AppRouter';

export const App = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const DB_URL =
			'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
		fetch(DB_URL)
			.then((data) => data.json())
			.then((recipeData) => 
			setRecipes(recipeData.meals));
	}, []);

	return (
		// Replaced our own Card component with Container compontn and restricted it's width to "md" value (900px) so that on large screen the content does not spread too wide. 
		<Container maxWidth='md'>
			<AppRouter recipes={recipes} setRecipes={setRecipes} />
		</Container>
	);
};
