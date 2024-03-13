import { useState, useEffect } from 'react';
import './styles.css';

export const RegistrationForm = () => {
	const initialFormState = {
		username: '',
		email: '',
		phoneNumber: '',
		password: '',
	};

	const initialFormErrorsState = {
		username: null,
		email: null,
		phoneNumber: null,
		password: null,
	};

	const [formData, setFormData] = useState(initialFormState);
	const [formErrors, setFormErrors] = useState(initialFormErrorsState);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			formErrors.username ||
			formErrors.email ||
			formErrors.phoneNumber ||
			formErrors.password
		) {
			console.log('Please correct errors first!');
		} else {
			console.log('Form submitted!');
			console.table(formData);
			setFormData(initialFormState);
		}
	};

	useEffect(() => {
		if (formData.username.length < 5 && formData.username.length > 0) {
			setFormErrors((prevState) => ({
				...prevState,
				username: 'Username must be more than 5 characters',
			}));
		} else {
			setFormErrors((prevState) => ({
				...prevState,
				username: null,
			}));
		}
	}, [formData.username]);

	const handleUserNameChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			username: e.target.value,
		}));
	};
	const handlePasswordChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			password: e.target.value,
		}));
	};

	const handleEmailChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			email: e.target.value,
		}));
	};

	const handlePhoneNumberChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			phoneNumber: e.target.value,
		}));
	};

	return (
		<form className='registration-form' onSubmit={handleSubmit} noValidate>
			<label htmlFor='user'>User Name</label>
			<input
				type='text'
				id='user'
				name='user'
				value={formData.username}
				onChange={handleUserNameChange}
			/>

			{formErrors.username ? <p>{formErrors.username}</p> : <></>}

			<label htmlFor='email'>Email</label>
			<input
				type='email'
				id='email'
				name='email'
				value={formData.email}
				onChange={handleEmailChange}
			/>

			<label htmlFor='phoneNumber'>Phone Number</label>
			<input
				type='tel'
				id='phoneNumber'
				name='phoneNumber'
				value={formData.phoneNumber}
				onChange={handlePhoneNumberChange}
			/>

			<label htmlFor='password'>Password</label>
			<input
				type='password'
				id='password'
				name='password'
				value={formData.password}
				onChange={handlePasswordChange}
			/>
			<button
				type='submit'
				disabled={
					formErrors.username ||
					formErrors.email ||
					formErrors.phoneNumber ||
					formErrors.password
				}
			>
				Submit
			</button>
		</form>
	);
};
