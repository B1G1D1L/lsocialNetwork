import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userAPI } from '../../api/api';
import { compose } from 'redux';

import { setUserProfile, setUserStatus } from '../../Redax/profile-reducer';
import { withAuthRedirect } from '../hoc/withAuthRdirect';
import Profile from './Profile';

class ProfileConitaner extends React.Component {
  
  componentDidMount() {
    let userId = this.props.match.params.userId;

    userAPI.getUserProfile(userId).then(response => this.props.setUserProfile(response));
    userAPI.getStatus(userId).then(response => this.props.setUserStatus(response));
  }
  
  render() {
    return (
      <Profile profile={this.props.profile}
        userStatus={this.props.userStatus} />
    )
  }
};



const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    userStatus: state.profilePage.status
  }
};

// Наш HOC
export default compose(
  connect(mapStateToProps, {setUserProfile, setUserStatus}),
  withRouter,
  withAuthRedirect
)(ProfileConitaner);
