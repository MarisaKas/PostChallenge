import React, { Component } from 'react';
import { connect } from 'react-redux';
import './result.styles.css';


const mapStateToProps = (state) => {
  return {
    profile: state.requestProfile.profile
  }
}

class Result extends Component {

  render() {
    return(
      <div className='result-container'>
        <div className="profile-card">
          <div className="back-card">
            <div className="front-content">
              <h1>{ this.props.posts.title }</h1>
              <h2>{ this.props.posts.body }</h2>
            </div>
          </div>
        </div>
      </div>
    )
};
}

export default connect(mapStateToProps)(Result);