const API_KEY = 'qCnxm3oi9NS9mzAkGmh7_4B6V3p6DJnyFs_wKfNQFF4';

const button = document.querySelector('#fetch-button');

button.addEventListener('click', function () {
	fetch(`https://api.unsplash.com/photos/random?count=10&client_id=${API_KEY}`)
		.then((response) => response.json())
		.then((data) => {
      data.map((imgData) => {
        createImageElements(imgData.alt_description, imgData.urls.regular)
      })
    })
		.catch((error) => console.log(error));
});

const imageContainer = document.getElementById('image-container');
const createImageElements = (description, url) => {
	// Div with class image
	// 	const spanElement = document.createElement('span');
	// 	listElement.appendChild(newLi);
	const div = document.createElement('div');
	div.classList.add('image');

	const image = document.createElement('img');
	image.src = url;
	image.alt = description;

	div.appendChild(image);
	imageContainer.appendChild(div);
};
