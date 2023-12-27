import {Button} from './components/Button';
import './App.css';
// hot-reloading - constantly reloads app in the browser when any file is changed.

export const App = () => {
  const buttons = ['Click me', 'Submit', 'Reset', 'Delete'];
  const todos = ['Buy groceries',
  'Read a book',
  'Attend meeting',
  'Workout session',
  'Call family',
  'Complete project work',
  'Learn a new programming language',
  'Plan weekend trip',
  'Clean the house',
  'Prepare dinner'];



  return (
    <div className="App">
      <h1>hello world!</h1>
      {
        buttons.map(btn => <Button title={btn} key={btn} />)
      }
      <ul>
      {
        todos.map(todo => <li key={todo}>{todo}</li>)
      }
      </ul>

      
    </div>
  );
}

// Default export: 
// export default App;
