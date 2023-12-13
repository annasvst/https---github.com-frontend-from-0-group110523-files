/* 
CRUD - set of basic operations or functions that are commonly used in the context of database management and web applications to manage and manipulate data.
C - create - POST method (has request body to transfer data)
R - read - GET method (cannot have request body to send data to the server)
U - update - PUT / PATCH method (have request body to transfer data)
D - delete - DELETE method
Status codes
HTTP status codes are three-digit numbers that the server sends in response to a client's request made to a web server. They provide information about the outcome of the request, whether it was successful, encountered an error, or requires further action. HTTP status codes are grouped into several ranges, each indicating a different category of response. 
100... - Informational Responses
200... - Successful Responses (200 OK, 201 Created, 204 No content)
300.. - redirection (301 Moved Permanently, Found (or 307 Temporary Redirect))
400... - Errors (
	400 Bad Request - something is wrong in your request,
	401 Unauthorized - you don't have access to the resource (API key missing or does not have access to that endpoint),
	403 Forbidden - you are not allowed to access this enpoint,
	404 Not Found - you're trying to access a non-existing endpoint (could be used for security reasons as well to hide some resources)
	)
500... - Service error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)
*/

// Mocked - it behaves like if the request was processed even if it is not

const URL = 'https://jsonplaceholder.typicode.com/posts';

function getPosts() {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => response.json())
		.then((data) =>
			data.map((item) => {
				//  post-container
				const post = document.createElement('div');
				post.classList.add('post');
				const postTitle = document.createElement('h2');
				postTitle.innerText = item.title;
				post.classList.add('post-title');

				const postBody = document.createElement('p');
				postBody.innerText = item.body;
				post.classList.add('post-body');

				const postsContainer = document.getElementById('post-container');
				// TODO: add <a> element instead of <button>, href will be './editPost/edit-post.html?postId=${postId}';
				const editPostButton = document.createElement('button');
				editPostButton.textContent = 'Edit Post';
				editPostButton.onclick = () => updatePost(item.id);

				post.appendChild(postTitle);
				post.appendChild(postBody);
				post.appendChild(editPostButton);

				postsContainer.appendChild(post);
			})
		);
}

function getPostById() {}

function createPost(event) {
	event.preventDefault();
	const titleInput = document.getElementById('post-title-input');
	const bodyInput = document.getElementById('post-body-input');
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
			title: titleInput.value,
			body: bodyInput.value,
			userId: 5,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((response) => response.json())
		.then((json) => console.log(json));
}

function updatePost(postId) {
	fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
		method: 'PUT',
		body: JSON.stringify({
			title: 'Hello',
			body: 'World',
			userId: 5,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((response) => response.json())
		.then((json) => console.log(json));
}

function deletePost() {}

// TODO: move all the code related to create post to another JS file
document
	.getElementById('post-form')
	.addEventListener('submit', (event) => createPost(event));
