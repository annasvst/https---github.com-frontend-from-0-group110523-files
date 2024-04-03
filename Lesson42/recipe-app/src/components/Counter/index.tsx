import { useReducer } from 'react';

interface Count {
	count: number;
}

enum CounterActionType {
	INCREMENT = 'increment',
	DECREMENT = 'decrement',
}

interface CounterAction {
	type: CounterActionType;
}

// Reducer function that defines how the state changes
function reducer(state: Count, action: CounterAction) {
	switch (action.type) {
		case CounterActionType.INCREMENT:
			return { count: state.count + 1 };
		case CounterActionType.DECREMENT:
			return { count: state.count - 1 };
		default:
			throw new Error();
	}
}

interface CounterProps {
	initialState?: Count;
}


export const Counter = ({initialState}: CounterProps) => {
	const [state, dispatch] = useReducer(reducer, initialState ?? {count : 0});

	function handeIncrease () {
		dispatch({ type: CounterActionType.INCREMENT })
	};

	return (
		<>
			<h2 data-testid={'count-label'}>Count: </h2>
			<span data-testid={'count-value'}>{state.count}</span>
			
			<button data-testid={'increment-button'} onClick={ handeIncrease }>
				+
			</button>
			<button data-testid={'decrement-button'} onClick={() => dispatch({ type: CounterActionType.DECREMENT })}>
				-
			</button>
		</>
	);
};