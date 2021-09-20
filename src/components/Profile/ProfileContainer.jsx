import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { getUserProfile, getStatus, updateStatus } from '../../Redax/reducers/profile-reducer';
import { withAuthRedirect } from '../hoc/withAuthRdirect';
import Profile from './Profile';

class ProfileConitaner extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = this.props.authorizationUserId;
      if(!userId) {
        this.props.history.push('/login');
      }
    }
    this.props.getStatus(userId);
    this.props.getUserProfile(userId);
  }
  
  render() {
    return (
      <Profile profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus} />
    )
  }
};



const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizationUserId: state.auth.id,
    isAuth: state.auth.isAuth
  }
};

// Наш HOC
export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileConitaner);
