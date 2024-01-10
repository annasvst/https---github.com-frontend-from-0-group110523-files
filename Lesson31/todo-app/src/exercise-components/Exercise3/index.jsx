// Exercise 3: Click Counter
//Develop a click counter using a functional component. Display the number of times a button has been clicked, and update it with each click.
import { useState } from 'react';

export const Ex3 = () => {
	const [number, setNumber] = useState(0);

	return (
		<div>
			<span>{number}</span>
			<button onClick={() => setNumber(prev => prev + 1)}>
				Click
			</button>
		</div>
	);
};
