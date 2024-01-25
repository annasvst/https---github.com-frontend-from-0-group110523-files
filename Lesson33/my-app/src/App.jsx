import { List } from './components/List';
import { Account } from './components/Account';
import { Navbar } from './components/Navbar';
import { Demo } from './components/Demo';
import { PerformanceState } from './components/PerformanceState';
import { useState } from 'react';
import {useUser} from './modules/user/UserProvider';
import { todoData } from './data';
import './App.css';

export const App = () => {
	const [todos, setTodos] = useState(todoData);
	const user = useUser();

	return (
		<div className='container'>
			<Navbar />
			{user.isLoggedInUser ? <Account /> : <></>}
			<div className='app'>
				<List todos={todos} setTodos={setTodos} />
			</div>
			<PerformanceState todos={todos} />
		</div>
	);
};
