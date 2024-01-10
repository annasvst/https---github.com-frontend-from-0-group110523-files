import { useState } from 'react';

export const Ex1 = () => {
	const [btnTitle, setBtnTitle] = useState('Click me!');

	function handleClick() {
		setBtnTitle('Clicked');
	}

	return (
		<div className='btn-container'>
			<button onClick={handleClick}>{btnTitle}</button>
		</div>
	);
};
