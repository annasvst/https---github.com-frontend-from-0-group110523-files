import { useState, useEffect } from 'react';
import {Card} from './components/Card';
import {RegistrationForm} from "./modules/user/RegistrationForm";
import './App.css';

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
			<RegistrationForm />
      {/* <Search setRecipes={setRecipes}/>
			<ul className='recipes__list'>{recipes.map((recipe => <li key={recipe.idMeal} >{recipe.strMeal}</li>))}</ul> */}
		</Card>
	);
};
