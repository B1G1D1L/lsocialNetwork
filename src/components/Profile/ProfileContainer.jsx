import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { userAPI } from '../../api/api';

import { setUserProfile } from '../../Redax/profile-reducer';
import Profile from './Profile';

class ProfileConitaner extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    userAPI.getUserProfile(userId).then(response => this.props.setUserProfile(response))
  }
  
  render () {
    if(!this.props.isAuth) return <Redirect to='/login' />

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