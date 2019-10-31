import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestPosts, requestUsers } from '../../actions';


import { CardList } from '../card-list/card-list.component';
import { UserList } from '../user-list/user-list.component';



import './home.styles.css';


const mapStateToProps = (state) => {
  return {
    posts: state.requestPosts.posts,
    users: state.requestUsers.users,
    isPending: state.requestPosts.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestPosts: (id) => dispatch(requestPosts(id)),
    onRequestUsers: () => dispatch(requestUsers())
  }
}

class Home extends Component {

  componentDidMount() {
    const id = 0;
    this.props.onRequestUsers();
    this.props.onRequestPosts(id);
  }

  render() {
    
    const { posts, users} = this.props;

    return (
        <div className='Home'>
          <div className='content'>
            <div className='cards'>
              <h2>Users</h2>
              <p>If you want to get blogs from specific user, select user from the list below:</p>
              <UserList users={users} />
              <CardList posts={posts} />
            </div>
          </div>
        </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
