import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserProfile } from '../../Redax/profile-reducer';
import Profile from './Profile';

class ProfileConitaner extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
    .then( response => {
      this.props.setUserProfile(response.data);
    } )
  }
  
  render () {
    return (
      <Profile {...this.state} profile={this.props.profile} />
    )
  }
};


const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }

}
let WithUrlDataContainerComponent = withRouter(ProfileConitaner);
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);