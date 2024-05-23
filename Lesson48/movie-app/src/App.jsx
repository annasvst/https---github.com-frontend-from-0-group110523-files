import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts?limit=10')
			.then((response) => response.json())
			.then((data) => setPosts(data));
	}, []);

	const onSortAscending = () => {
		const sortedPosts = [...posts].sort((a, b) => a.userId - b.userId);
		console.log('sortedPosts', sortedPosts);
		setPosts(sortedPosts);
	};

	const onSortDescending = () => {
		const sortedPosts = [...posts].sort((a, b) => b.userId - a.userId);
		setPosts(sortedPosts);
	};

	return (
		<div className='App'>
			{posts.length > 0 ? (
				<>
					<p>Sort by rating:</p>
					<button onClick={onSortAscending}>Ascending</button>
					<button onClick={onSortDescending}>Descending</button>
					<ul>
						{posts.map((post) => (
							<li key={post.id}>
								<h2>{post.title}</h2>
								<h3 class={''}>Rating: {post.userId}</h3>
								{rating > 4 ? <span className="highlited">Rating: {rating}</span> : <span>Rating: {rating}</span>}
							</li>
						))}
					</ul>
				</>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}

export default App;
