import React from 'react';

import Card  from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => {
	  return(
		  <div className='card-list'>
		    {props.posts.map(posts => (
		      <Card key={posts.email} posts={posts} />
		    ))
			}
		  </div>
	  )
};