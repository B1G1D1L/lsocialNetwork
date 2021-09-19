import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserData, logout } from '../../Redax/auth-reducer'
import Header from './Header';
import { authAPI, userAPI } from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.me();
    this.props.getAuthUserData();
  }
  
  render() {
    return <Header {...this.props}></Header>
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,  
    login: state.auth.login
  }
}

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);