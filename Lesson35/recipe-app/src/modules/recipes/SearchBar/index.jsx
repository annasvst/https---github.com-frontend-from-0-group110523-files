import { useEffect, useState } from 'react';
import './styles.css';

export const Search = ({ setRecipes }) => {
	const [mainIngredient, setMainIngredient] = useState('');
	const [inputError, setInputError] = useState(undefined);
	const [searchError, setSearchError] = useState(undefined);

	function handleSubmit(e) {
		e.preventDefault();
		const cleansedInput = mainIngredient.trim().replace(/\s/g, '_');

		fetch(
			`https://www.themealdb.com/api/json/v1/1/filter.php?i=${cleansedInput}`
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.meals && data.meals.length > 0) {
					setRecipes(data.meals);
					setSearchError(null);
				} else {
					setSearchError(
						`Could not find any meals with main ingredient ${mainIngredient}`
					);
				}
			});
	}

	useEffect(() => {
		if (mainIngredient) {
			const trimmedSearchInput = mainIngredient.trim();
			const numberOfSpaces = mainIngredient.length - trimmedSearchInput.length;
			if (numberOfSpaces > 1) {
				setInputError(
					'Main ingredient should not have more than one white space in a row.'
				);
			} else {
				setInputError(null);
			}
		}
	}, [mainIngredient]);

	return (
		<>
			<form onSubmit={handleSubmit} className='search-bar'>
				<label htmlFor='main-ingredient'>Search meal by main ingredient</label>
				<div>
					<input
						type='text'
						name='main-ingredient'
						id='main-ingredient'
						placeholder='chicken breast'
						onChange={(event) => setMainIngredient(event.target.value)}
						className='search-bar__input'
					/>
					<button type='submit'>Search</button>
				</div>
				{inputError && <span>{inputError}</span>}
			</form>
			{searchError && <p>{searchError}</p>}
		</>
	);
};
