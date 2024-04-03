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
			Count: {state.count}
			<button onClick={ handeIncrease }>
				+
			</button>
			<button onClick={() => dispatch({ type: CounterActionType.DECREMENT })}>
				-
			</button>
		</>
	);
};