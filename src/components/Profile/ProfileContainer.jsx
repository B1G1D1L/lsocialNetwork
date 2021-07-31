import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userAPI } from '../../api/api';
import { compose } from 'redux';

import { setUserProfile } from '../../Redax/profile-reducer';
import { withAuthRedirect } from '../hoc/withAuthRdirect';
import Profile from './Profile';

class ProfileConitaner extends React.Component {
  
  componentDidMount() {
    let userId = this.props.match.params.userId;
    userAPI.getUserProfile(userId).then(response => this.props.setUserProfile(response))
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

// Наш HOC
export default compose(
  connect(mapStateToProps, {setUserProfile}),
  withRouter,
  withAuthRedirect
)(ProfileConitaner);
