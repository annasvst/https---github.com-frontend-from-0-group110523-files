import { useState } from 'react';
import './styles.css';

export const ControlledInput = () => {
	const [emailInput, setEmailInput] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('Form submited with the following data: email=', emailInput);
		setEmailInput('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='email'>Controlled email input</label>
			<input
				type='email'
				id='email'
				name='email'
				value={emailInput}
				onChange={(e) => setEmailInput(e.target.value)}
				placeholder='name@gmail.com'
			/>
			<input type='submit' value='Update email' />
		</form>
	);
};
