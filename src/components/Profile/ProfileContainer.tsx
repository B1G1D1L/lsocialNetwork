import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { AppStateType, ConnectType } from '../../Redax/redax-store';
import { RouteComponentProps, RouteProps } from 'react-router';
import { 
    getUserProfile, 
    getStatus,
    updateStatus, 
    savePhoto 
  } from '../../Redax/reducers/profile-reducer';
import { withAuthRedirect } from '../hoc/withAuthRdirect';
import Profile from './Profile';




class ProfileConitaner extends React.Component<ProfileConitanerProps & RouteComponentProps<RouteParams>> {

  refreshProfile() {
    let userId = Number(this.props.match.params.userId);

    if(userId) {
      this.props.getStatus(userId);
      this.props.getUserProfile(userId);
    } else {
      let userIdPath = this.props.authorizationUserId
      if(userIdPath) {
        this.props.getStatus(userIdPath);
        this.props.getUserProfile(userIdPath);
      }
    }
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: ProfileConitanerProps & RouteComponentProps<RouteParams>, {}) {
    // Если владелец зашел на главную страницу
    if(this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }
  
  render() {
    return (
      <Profile 
        profile={this.props.profile}
        status={this.props.status}
        isOwner={!!this.props.match.params.userId}
        userId={this.props.authorizationUserId}

        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    )
  }
};


// Map state
const mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizationUserId: state.auth.id,
    isAuth: state.auth.isAuth,
  }
};

// Наш HOC
const connectHOC = connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto })
const connectProps = connectHOC(ProfileConitaner);

export { connectProps as ProfileContainer}


// Type
type ProfileConitanerProps = ConnectType<typeof connectHOC> // Props

interface RouteParams {
  userId: undefined | string
} 
