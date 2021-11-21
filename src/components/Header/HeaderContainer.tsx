import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector} from 'react-redux';
import { AppStateType, ConnectType } from '../../Redax/redax-store';
import { getAuthUserData, logout, getUserProfilePhoto } from '../../Redax/reducers/auth-reducer'
import { getUserId } from '../../Redax/selectors/auth.selectors';
import Header from './Header';


const HeaderContainer: React.FC = (props) => {
  const userId = useSelector(getUserId)
  
  const dispatch = useDispatch()

  const fetchUserProfilePhoto = (userId: number) => {
    dispatch(getUserProfilePhoto(userId))
  }
    
  const fetchUserDataOwner = () => {
    dispatch(getAuthUserData())
  }

  useEffect(() => {
    fetchUserDataOwner()
    if(userId) {
      fetchUserProfilePhoto(userId)
    }
  }, [])

  
  return(
    <Header />
  )
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