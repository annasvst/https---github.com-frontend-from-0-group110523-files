import { Link } from 'react-router-dom';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../modules/user/userSlice';
import { AppState } from '../../store';

export const Navbar = () => {
	const dispatch = useDispatch();
  const user = useSelector((state: AppState) => state.user);

	return (
		<nav className='navbar'>
			<ul className='navbar-list'>
				<div className='navbar--left'>
					<li>
						<Link className='navbar__item' to='/'>
							Home
						</Link>
					</li>
				</div>
				<div className='navbar--right'>
					{user.loggedIn && <li>
						<Link className='navbar__item' to='/recipes/new'>
							Create new recipe
						</Link>
					</li>}
					{user.loggedIn && <li>
						<Link className='navbar__item' to='/user/settings'>
							Settings
						</Link>
					</li>}
					{!user.loggedIn && <li>
						<button className='navbar__item' onClick={() => dispatch(login())}>
							Log in
						</button>
					</li>}
					{user.loggedIn && <li>
						<button className='navbar__item' onClick={() => dispatch(logout())}>
							Log out
						</button>
					</li>}
				</div>
			</ul>
		</nav>
	);
};
