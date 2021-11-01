import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserData, logout, getUserProfilePhoto } from '../../Redax/reducers/auth-reducer'
import Header from './Header';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
    this.props.getUserProfilePhoto(this.props.userId);
  }
  
  render() {
    return <Header {...this.props}></Header>
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,  
    login: state.auth.login,
    userId : state.auth.id,
    userPhoto: state.auth.userPhoto
  }
}

export default connect(mapStateToProps, {getAuthUserData, logout, getUserProfilePhoto})(HeaderContainer);