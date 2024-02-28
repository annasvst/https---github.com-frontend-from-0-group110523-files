import { Link } from 'react-router-dom';

export const RecipeList = ({ recipes }) => {
	return (
		<ul className='recipes__list'>
			{recipes.map((recipe) => (
				<li key={recipe.idMeal}>
					<Link to={`recipes/${recipe.idMeal}/details`}>{recipe.strMeal}</Link>
				</li>
			))}
		</ul>
	);
};
