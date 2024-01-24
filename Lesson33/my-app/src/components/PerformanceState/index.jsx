export const PerformanceState = ({ todos }) => {

	const completedTodos = todos.filter(todo => todo.completed).length;

	return <div>{`Completed ${completedTodos} of ${todos.length}`}</div>;
};
