import './styles.css';
import {UserContext} from '../../UserContext';
import { useContext } from 'react';

export const Navbar = () => {
  const user = useContext(UserContext);
  
	return (
		<nav className='navigation'>
			<ul className='navigation-list'>
				<li>Home</li>
				{user.isLoggedInUser ? (
					<>
						<li>Account</li>
            <li>Log out</li>
					</>
				) : (
					<li>Log in</li>
				)}
			</ul>
		</nav>
	);
};
