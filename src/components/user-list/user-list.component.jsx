import React from 'react';

import User from '../user/user.component';
import './user-list.styles.css';

export const UserList = props => {
	  return(
		  <ul className='user-list'>
		    {props.users.map(users => (
		      <li><User key={users.username} users={users} /></li>
		    ))
			}
		  </ul>
	  )
};