import React from 'react';
import { connect} from 'react-redux';
import { AppStateType, ConnectType } from '../../Redax/redax-store';
import { getAuthUserData, logout, getUserProfilePhoto } from '../../Redax/reducers/auth-reducer'
import Header from './Header';


class HeaderContainer extends React.Component<HeaderContainerProps> {

  componentDidMount() {
    const { getAuthUserData, userId, getUserProfilePhoto, } = this.props

    getAuthUserData();
    if(userId){
      getUserProfilePhoto(userId);
    }
  }
  
  render() {
    return(
      <Header
        isAuth={this.props.isAuth}
        login={this.props.login} 
        userPhoto={this.props.userPhoto}
        logout={this.props.logout} >
      </Header>
    )
  }
}


// Map state
const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,  
    login: state.auth.login,
    userId : state.auth.id,
    userPhoto: state.auth.userPhoto
  }
}


const connectHOC = connect(mapStateToProps, {getAuthUserData, logout, getUserProfilePhoto})
const connectProps = connectHOC(HeaderContainer)

export { connectProps as HeaderContainer }


// Types
type HeaderContainerProps = ConnectType<typeof connectHOC, {}>