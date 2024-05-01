import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { updateRecipes } from '../recipesSlice';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [mainIngredient, setMainIngredient] = useState('');
  const [inputError, setInputError] = useState(undefined);
  const [searchError, setSearchError] = useState(undefined);

  function handleSubmit(e) {
    e.preventDefault();
    const cleansedInput = mainIngredient.trim().replace(/\s/g, '_');

    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${cleansedInput}`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.meals && data.meals.length > 0) {
          dispatch(updateRecipes(data.meals));
          setSearchError(null);
        } else {
          setSearchError(
            `Could not find any meals with main ingredient ${mainIngredient}`,
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
          'Main ingredient should not have more than one white space in a row.',
        );
      } else {
        setInputError(null);
      }
    }
  }, [mainIngredient]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label='Search for an ingredient...'
          variant='standard'
          type='text'
          name='main-ingredient'
          id='main-ingredient'
          placeholder='Chicken'
          onChange={(event) => setMainIngredient(event.target.value)}
          error={!!inputError}
          helperText={inputError}
          fullWidth
          data-testid='search-input'
        />
      </form>
      {searchError && <p>{searchError}</p>}
    </>
  );
};
