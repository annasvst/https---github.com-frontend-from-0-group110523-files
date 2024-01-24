import { useContext, useState } from "react";
import {UserContext} from '../../UserContext';
import './styles.css';

export const UserDetailsForm = ({setUser}) => {
  const user = useContext(UserContext);
  
  const [username, setUsername] = useState(user.username ? user.username : '');

  function handleSubmit (e) {
    e.preventDefault();
    console.log('New user name is: ', username);
    setUser(prevState => ({isLoggedInUser : prevState.isLoggedInUser, username: username }));
  };

  return (
    <form className='user-details-form' onSubmit={handleSubmit}>
      <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username} />
      <button type="submit">Save</button>
    </form>
  )
}