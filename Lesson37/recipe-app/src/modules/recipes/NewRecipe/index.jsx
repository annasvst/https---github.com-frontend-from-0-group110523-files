import { useForm } from 'react-hook-form';
import './styles.css';

const MealCategory = ['Dessert', 'Main Dish', 'Side Dish'];

// const MealCategory = [
//   {title: 'Dessert', id: 'dessert'}, {title: 'Main Dish', id: 'mainDish'}
// ];

export function NewRecipe() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onFormSubmit = (data) => console.log(data);

  // const ingrs = 'Milk - 500ml, eggs - 2, sugar - 2 tbsp';

	return (
		<form
			noValidate
			className='recipe-form'
			onSubmit={handleSubmit(onFormSubmit)}
		>
			<label htmlFor='strMeal'>Recipe Name</label>
			<input
				id='strMeal'
				type='text'
				{...register('strMeal', { required: true, minLength: 5 })}
			/>
			{errors.strMeal?.type === 'required' && (
				<span className='error-message'>Recipe Name is required</span>
			)}
			{errors.strMeal && errors.strMeal.type === 'minLength' && (
				<span className='error-message'>
					Recipe Name should be at least 5 characters long
				</span>
			)}
			<label htmlFor='strDrinkAlternate'>Drink Alternate</label>
			<input
				id='strDrinkAlternate'
				type='text'
				{...register('strDrinkAlternate')}
			/>
			<label htmlFor='strCategory'>Category</label>
			<select id='strCategory' {...register('strCategory', { required: true })}>
				<option value=''>Select Category</option>
				{MealCategory.map((category) => (
					<option
						key={category.replaceAll(' ', '')}
						value={category.replaceAll(' ', '')}
					>
						{category}
					</option>
				))}
			</select>
			<label htmlFor='strInstructions'>Instructions</label>
			<textarea
				id='strInstructions'
				{...register('strInstructions', {
					required: 'Instructions are required',
					minLength: {
						value: 50,
						message: 'Please enter Instructions at least 50 characters long',
					},
				})}
			/>
			{errors.strInstructions && (
				<span className='error-message'>{errors.strInstructions.message}</span>
			)}


      <label htmlFor="">Ingredients and measures</label>
      <textarea placeholder='Milk - 500ml, eggs - 2, sugar - 2 tbsp'/>

			<button type='submit'>Save Recipe</button>
		</form>
	);
}
