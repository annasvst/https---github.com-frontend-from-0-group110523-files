import { List } from './components/List';
import './App.css';

export const App = () => {
	// const loggedInUser = {
	//   isLoggedInUser: true,
	//   username: "johndoe01"
	// };
	// const loggedOutUser = {
	//   isLoggedInUser: false
	// };

	return (
		<div className='container'>
			<div className='app'>
				<List />
			</div>
		</div>
	);
};
