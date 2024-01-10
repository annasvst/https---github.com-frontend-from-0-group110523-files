// Build a toggle button using a functional component. Clicking the button should toggle its text between "On" and "Off".
import { useState } from 'react';

export const Ex2 = () => {
	const [state, setState] = useState(true);

  function handleClick () {
    setState(prevState => !prevState);
  };

	return <button onClick={handleClick}>{state ? 'On' : 'Off'}</button>;
};
