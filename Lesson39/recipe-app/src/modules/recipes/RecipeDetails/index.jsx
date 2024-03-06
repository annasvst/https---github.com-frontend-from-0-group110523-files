import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';

export const RecipeDetails = () => {
  const {id} = useParams();  
const [data, setData]=useState(null);

useEffect(() => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  .then((res)=> res.json())
  .then((data)=> {
    if (data?.meals) {
      setData(data.meals[0]);
    }
  });
}, [id]);

  return (data ?
    <Typography variant='h3' component='h1'>{data.strMeal}</Typography> :
    <Typography variant='subtitle1'>Recipe not found</Typography>
  );
}