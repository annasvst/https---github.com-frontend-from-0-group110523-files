import {createContext, useReducer, useContext} from 'react';

export const USER_ACTIONS = {
	logIn: 'log_in',
	logOut: 'log_out',
	updateUser: 'updated_user'
};

export const loggedInUser = {
	isLoggedInUser: true,
	username: 'johndoe01',
};

export const loggedOutUser = {
  isLoggedInUser: false
};

export const UserContext = createContext();
export const UserDispatchContext = createContext();

export const UserProvider = ({children, initialState}) => {
	const [user, dispatch] = useReducer(userReducer, initialState ?? {});

	return (
		<UserContext.Provider value={user}>
			<UserDispatchContext.Provider value={dispatch}>
				{children}
			</UserDispatchContext.Provider>
		</UserContext.Provider>
	)
};

/*
Action object
{
	type: 'increment',
	payload: 5
}
*/

function userReducer (state, action) {
	console.log('Updating User state. Action: ', action, 'State: ', state);
	switch (action.type) {
		case USER_ACTIONS.logIn: {
			return (
				{
					isLoggedInUser: true
				}
			);
		}
		case USER_ACTIONS.logOut: {
			return (
				{
					isLoggedInUser: false
				}
			);
		}
		case USER_ACTIONS.updateUser: {
			return (
				{
					isLoggedInUser: state.isLoggedInUser,
					username: action.payload
				}
			);
		}
		default: throw Error(`Action type ${action.type} is not supported`);
	}
};


// The two functions below (useUser and useUserDispatch) are called 'custom hooks' in React
export const useUser = () => useContext(UserContext);
export const useUserDispatch = () => useContext(UserDispatchContext);



