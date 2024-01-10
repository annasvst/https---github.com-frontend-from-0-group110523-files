import './App.css';
import { List } from './shared-components/List';
import { Card } from './shared-components/Card';
import { Ex1 } from './exercise-components/Exercises1';
import { Ex2 } from './exercise-components/Exercise2';
import { Ex3 } from './exercise-components/Exercise3';

export const App = () => {
	return (
		<div className='app'>
			<main>
				<Card>
					<Ex1/>
				</Card>
				<Card>
					<Ex2/>
				</Card>
				<Card>
					<Ex3/>
				</Card>
				<Card>
					<List />
				</Card>
			</main>
		</div>
	);
};
