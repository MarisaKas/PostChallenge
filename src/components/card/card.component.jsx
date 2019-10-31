import React, { Component } from 'react';

import './card.styles.css';


class Card extends Component {

	state = {
        posts: Object.assign(this.props.posts)
    }


	  deletePost(e) {
	  	console.log(this.props.posts)
	  	fetch('https://jsonplaceholder.typicode.com/posts/' + this.props.posts.id, {
		    method: 'DELETE'
		})
		//esta línea me está dando el error
	    let filteredArray = this.state.posts.filter(item => item.id !== e)
	    this.setState({posts: filteredArray});
	  }

	render() {
	 	return(
			  <div className='card-container'>
			    <p> User Id: {this.props.posts.userId}</p>
			    <h2>{this.props.posts.title}</h2>
			    <h3>{this.props.posts.body}</h3>
			    <button onClick={() => this.deletePost(this.props.posts.id)}>Delete</button>

			  </div>
		  
		)
	};
}


export default Card;