import { useState, useEffect } from 'react';
import { Search } from './modules/recipes/SearchBar';
import './App.css';

export const App = () => {
	const [recipes, setRecipes] = useState([]);
  const [bgColor, setBgColor] = useState('');

	useEffect(() => {
		const DB_URL =
			'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
		fetch(DB_URL)
			.then((data) => data.json())
			.then((recipeData) => 
			setRecipes(recipeData.meals));
	}, []);

  useEffect(() => {
   if (recipes.length === 0) {
    setBgColor('white');
   } else if (recipes.length > 0 && recipes.length <= 10) {
    setBgColor('grey');
   } else if (recipes.length > 10) {
    setBgColor('yellow');
   }
  }, [recipes]);


	// strMeal, idMeal
	return (
		<div className={`app ${bgColor}`}>
      <Search setRecipes={setRecipes}/>
			<ul className='recipes__list'>{recipes.map((recipe => <li key={recipe.idMeal} >{recipe.strMeal}</li>))}</ul>
		</div>
	);
};
