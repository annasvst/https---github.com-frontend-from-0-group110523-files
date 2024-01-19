import {createContext} from 'react';

export const UserContext = createContext();
// export const ContextNameContext = createContext();

export const loggedInUser = {
	isLoggedInUser: true,
	username: 'johndoe01',
};

export const loggedOutUser = {
  isLoggedInUser: false
};
