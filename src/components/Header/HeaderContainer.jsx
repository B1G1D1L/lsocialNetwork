import React from 'react';
import { connect } from 'react-redux';

import { setUserData } from '../../Redax/auth-reducer'
import Header from './Header';
import { userAPI } from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    userAPI.getAuth()
      .then(data => {
      // если 0 то залогинены
        if(data.resultCode === 0) {
          let {id, email, login} = data.data;
          this.props.setUserData(id, email, login);
        }
      })
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

export default connect(mapStateToProps, {setUserData})(HeaderContainer);