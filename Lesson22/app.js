const form = document.getElementById('to-do-form');
const inputElement = document.getElementById('to-do-input');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	let newLi = document.createElement('li');

	const spanElement = document.createElement('span');
	spanElement.textContent = inputElement.value;
	spanElement.addEventListener('click', function () {
		spanElement.classList.add('completed');
	});

	const buttonElement = document.createElement('button');
	buttonElement.innerText = 'X';

	buttonElement.addEventListener('click', function () {
		newLi.remove();
	});

	newLi.appendChild(spanElement);
	newLi.appendChild(buttonElement);

	const listElement = document.getElementById('task-list');

	listElement.appendChild(newLi);
	inputElement.value = '';
});
