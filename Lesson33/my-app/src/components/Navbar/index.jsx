import { USER_ACTIONS, useUser, useUserDispatch } from '../../modules/user/UserProvider';
import './styles.css';

export const Navbar = () => {
	const user = useUser();
	// const user = useContext(UserContext);
	const dispatch = useUserDispatch();
	// const dispatch = useContext(UserDispatchContext);

	return (
		<nav className='navigation'>
			<ul className='navigation-list'>
				<li>Home</li>
				{user.isLoggedInUser ? (
					<>
						<li>Account</li>
						<li>
							<button onClick={() => dispatch({ type: USER_ACTIONS.logOut })}>
								Log out
							</button>
						</li>
					</>
				) : (
					<li>
						<button onClick={() => dispatch({ type: USER_ACTIONS.logIn })}>Log in</button>
					</li>
				)}
			</ul>
		</nav>
	);
};
