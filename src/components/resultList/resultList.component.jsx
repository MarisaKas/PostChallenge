import React, { Component } from 'react';
import { connect } from 'react-redux';
import Result  from '../result/result.component';


const mapStateToProps = (state) => {
  return {
    profile: state.requestProfile.profile
  }
}

class ResultList extends Component {
    
    render() {
      
  	  return(
  		  <div className='result'>
          {this.props.profile.map(profile => (
            <Result key={profile.id} posts={profile} />
          ))
        }
        </div>
  	  )
  }
};
export default connect(mapStateToProps)(ResultList);
