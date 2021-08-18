import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { userAPI } from '../../../api/api';
import { setUserStatus } from '../../../Redax/profile-reducer';
import UserStatus from './UserStatus';

class UserStatusComponent extends React.Component {
  componentDidMount() {
    userAPI.getStatus(this.props.userId)
    .then(response => this.props.setUserStatus(response))
  }

  render() {
    return <UserStatus userStatus={this.props.userStatus}/>
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.profilePage.profile.userId,
    userStatus: state.profilePage.status
  }
}

export default compose(
  connect(mapStateToProps, {setUserStatus})
)(UserStatusComponent)