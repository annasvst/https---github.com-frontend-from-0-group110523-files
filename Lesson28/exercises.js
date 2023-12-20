// 1. Convert the function below into asyncrounous function using async/await and try/catch syntax.
// async function fetchPosts () {
// 	try {
// 		const response = await(fetch('https://jsonplaceholder.typicode.com/posts'));
// 		const posts = await(response.json());
// 		console.log('Example 1, posts:');
// 	} catch(error) {
// 		console.log('Example 1, error:', error);
// 	}
// };
// fetchPosts();

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => {
// 			console.log('Got first response!');
// 			return [response, response.json()];
// 		})
//     .then((array) => console.log(array[0].status, console.log(array[1])))
//     .catch((error) => console.error(error));

// 2. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const fetchData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject('Data fetched unsuccessfully!');
		}, 2000);
	});
};

// fetchData()
// 	.then((result) => console.log(result))
// 	.catch((error) => console.error(error));

async function newFunction() {
	try {
		const result = await fetchData();
		console.log('exercise 2 result: ', result);
	} catch (err) {
		console.log(err);
	}
}

newFunction();
// 3. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const fetchUsers = async () => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		return await response.json();
	} catch (error) {
		console.error(error);
	}
};

async function getUsers() {
	try {
		const result = await fetchUsers();
		console.log('Total users:', result.length);
	} catch (error) {
		console.error(error);
	}
}
getUsers();

// fetchUsers()
// 	.then((users) => console.log('Total users:', users.length))
// 	.catch((error) => console.error(error));

// 4. Convert the function below into asyncrounous function using async/await and try/catch syntax.
// const fetchUserData = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const user = await response.json();
//     return user;
//   } catch (error) {
//     console.error('Error:', error);
//     throw error;
//   }
// };

// fetchUserData()
//   .then(user => console.log('User data:', user))
//   .catch(error => console.error('Error:', error));

// 5. Convert the function below into asyncrounous function using async/await and try/catch syntax.
// const getPostsAndComments = () => {
//   fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((post) => {
//     return fetch(
//       `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
//     );
//   })
//   .then((response) => response.json())
//   .then((comments) => console.log(comments))
//   .catch((error) => console.error(error));
// }

// 6.Convert the function below into asyncrounous function using async/await and try/catch syntax.

// const fetchWithTimeout = (url, timeout) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       fetch(url)
//         .then(response => resolve(response.json()))
//         .catch(error => reject(error));
//     }, timeout);
//   });
// };

// fetchWithTimeout('https://jsonplaceholder.typicode.com/posts', 2000)
//   .then(posts => console.log(posts))
//   .catch(error => console.error(error));
