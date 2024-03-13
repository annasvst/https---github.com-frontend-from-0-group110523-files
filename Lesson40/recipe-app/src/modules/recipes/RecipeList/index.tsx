import { Link } from 'react-router-dom';
import { ListItem } from '../ListItem';
import { Grid } from '@mui/material';
import { Recipe } from '../models';

interface RecipeListProps {
	recipes: Recipe[];
}

export const RecipeList = ({ recipes }: RecipeListProps) => {
	return (
		<Grid container spacing={4}>
			{recipes.map((recipe) => (
				<Grid item xs={12} sm={6} md={4} key={recipe.idMeal}>
					<Link to={`recipes/${recipe.idMeal}/details`}>
						<ListItem
							strMealThumb={recipe.strMealThumb}
							strMeal={recipe.strMeal}
						/>
					</Link>
				</Grid>
			))}
		</Grid>
	);
};
