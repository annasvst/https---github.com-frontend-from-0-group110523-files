import { useState } from "react";
import {useUser, useUserDispatch, USER_ACTIONS} from '../../modules/user/UserProvider';
import './styles.css';

export const UserDetailsForm = () => {
  const user = useUser();
  const dispatch = useUserDispatch();
  
  const [username, setUsername] = useState(user.username ? user.username : '');

  function handleSubmit (e) {
    e.preventDefault();
    console.log('New user name is: ', username);

    dispatch({type: USER_ACTIONS.updateUser, username});
  };

  return (
    <form className='user-details-form' onSubmit={handleSubmit}>
      <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username} />
      <button type="submit">Save</button>
    </form>
  )
}