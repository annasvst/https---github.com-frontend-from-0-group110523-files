import './App.css';
import { List } from './shared-components/List';
import { Card } from './shared-components/Card';
import { Demo } from './shared-components/Demo';

/* 1. {} for JS code in JSX
  2. Attribute names can vary (e.g. class is className, onclick is onClick)
  3. JSX expressions must have one parent element.
*/

export const App = () => {
	// JSX = JavaScript XML
	return (
		<div className='app'>
			<header>Header</header>
			<main>
				<Card>
					<Demo />
				</Card>
				<Card>
					<List />
				</Card>
			</main>
			<footer>Footer of the page</footer>
		</div>
	);
};
