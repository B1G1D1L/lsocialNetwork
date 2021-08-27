// import React from 'react';
// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { profileAPI } from '../../../api/api';
// import { setUserStatus, updateStatus } from '../../../Redax/profile-reducer';
// import UserStatus from './UserStatus';

// class UserStatusComponent extends React.Component {

//   // componentDidMount() {
//   //   profileAPI.getStatus(this.props.userId)
//   //   .then(response => this.props.setUserStatus(response))
//   // }

//   render() {
//     return <UserStatus userStatus={this.props.userStatus} updateStatus={this.props.updateStatus} />
//   }
// }


// const mapStateToProps = (state) => {
//   return {
//     userId: state.profilePage.profile.userId,
//     status: state.profilePage.status
//   }
// }


// export default compose(
//   connect(mapStateToProps, {setUserStatus, updateStatus})
// )(UserStatusComponent)