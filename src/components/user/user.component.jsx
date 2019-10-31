import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestPosts } from '../../actions';


import './user.styles.css';

const mapStateToProps = (state) => {
  return {
    posts: state.requestPosts.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestId: (id) => dispatch(requestPosts(id))
  }
}

class User extends Component {
	showPosts = () => {
	    this.props.onRequestId(this.props.users.id);
	}

	render() {
	 	return(
		  <div className='user-container' onClick={this.showPosts}>
		    {this.props.users.name}
		  </div>
		)
};
}

export default connect(mapStateToProps, mapDispatchToProps)(User);