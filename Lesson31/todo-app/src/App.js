import './App.css';
import { List } from './shared-components/List';
import { Card } from './shared-components/Card';
import { Demo } from './shared-components/Demo';

export const App = () => {
	return (
		<div className='app'>
			<main>
				<Card>
					<Demo />
				</Card>
				<Card>
					<List />
				</Card>
			</main>
		</div>
	);
};
