import { List } from './components/List';
import { Account } from './components/Account';
import { Navbar } from './components/Navbar';
import { PerformanceState } from './components/PerformanceState';
import { useContext, useState } from 'react';
import {UserContext} from './UserContext';
import { todoData } from './data';
import './App.css';

export const App = () => {
	const [todos, setTodos] = useState(todoData);
	const user = useContext(UserContext);

	return (
		<div className='container'>
			<Navbar />
			{user.isLoggedInUser ? <Account /> : <></> }
			<div className='app'>
				<List todos={todos} setTodos={setTodos} />
			</div>
			<PerformanceState todos={todos} />
		</div>
	);
};
