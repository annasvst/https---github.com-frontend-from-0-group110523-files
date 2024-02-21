import { useState, useEffect } from 'react';
import {Card} from './components/Card';
import './App.css';
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
		<Card>
			<AppRouter recipes={recipes} setRecipes={setRecipes} />
		</Card>
	);
};
