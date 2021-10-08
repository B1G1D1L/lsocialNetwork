import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { getUserProfile, 
  getStatus,
  updateStatus, 
  savePhoto } from '../../Redax/reducers/profile-reducer';
import { withAuthRedirect } from '../hoc/withAuthRdirect';
import Profile from './Profile';

class ProfileConitaner extends React.Component {

  refreshProfile = function() {
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

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }
  
  render() {
    return (
      <Profile 
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        isOwner={!!this.props.match.params.userId}
        savePhoto={this.props.savePhoto}
      />
    )
  }
};



const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizationUserId: state.auth.id,
    isAuth: state.auth.isAuth,
  }
};

// Наш HOC
export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
  withRouter,
  withAuthRedirect
)(ProfileConitaner);
