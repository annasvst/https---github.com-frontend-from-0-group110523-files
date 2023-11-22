const phoneRegex = /^\+?9?0?\d{10}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formElement = document.getElementById('myForm');

formElement.addEventListener('submit', function (event) {
	event.preventDefault(); // Don't submit!
  let isFormCorrect = true;
	// document
	// 	.querySelectorAll('.error')
	// 	.forEach((errorElement) => (errorElement.innerText = ''));

	const nameInput = document.getElementById('name');
	const nameErrorElement = document.getElementById('nameError');

	const surnameInput = document.getElementById('surname');
	const surnameErrorElement = document.getElementById('surnameError');

	const emailInput = document.getElementById('email');
	const emailErrorElement = document.getElementById('emailError');
	const ageInput = document.getElementById('age');
	const ageErrorElement = document.getElementById('ageError');
	const phoneInput = document.getElementById('phone');

	if (nameInput.value.length < 2) {
		nameErrorElement.innerText = 'at least two characters long';
        isFormCorrect = false;
	} else {
		nameErrorElement.innerText = '';
	}

	if (surnameInput.value.length < 2) {
		surnameErrorElement.innerText = 'at least two characters long';
        isFormCorrect = false;
	} else {
		surnameErrorElement.innerText = '';
	}
	if (!emailRegex.test(emailInput.value)) {
		emailErrorElement.innerText = 'Please enter correct email';
        isFormCorrect = false;
	} else {
		emailErrorElement.innerText = '';
	}
	if (ageInput.value <= 0) {
		ageErrorElement.innerText = 'Please enter valid age.';
        isFormCorrect = false;
	} else {
		ageErrorElement.innerText = '';
	}

  if (isFormCorrect) {
    console.log('Form submitted!');
    event.target.submit(); // Submit the form
  }
});
