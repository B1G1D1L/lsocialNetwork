import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { ConnectType } from '../../Redax/redax-store';
import { RouteComponentProps } from 'react-router';
import { 
    getUserProfile, 
    getStatus,
  } from '../../Redax/reducers/profile-reducer';
import { withAuthRedirect } from '../hoc/withAuthRdirect';
import Profile from './Profile';
import { getUserId } from '../../Redax/selectors/auth.selectors';



const ProfileConitaner: React.FC<ProfileConitanerProps> = (props) => {
  const userIdURL = props.match.params.userId

  const dispatch = useDispatch()
  const authorizationUserId = useSelector(getUserId)

  const fetchStatus = (userId: number) => {
    dispatch(getStatus(userId))
  }
  const fetchUserProfile = (userId: number) => {
    dispatch(getUserProfile(userId))
  }
  
  const refreshProfile = () => {
    let userId = Number(userIdURL)

    if(userId) {
      fetchStatus(userId);
      fetchUserProfile(userId);
    } else {  
      let userIdPath = authorizationUserId
      if(userIdPath) {
        fetchStatus(userIdPath);
        fetchUserProfile(userIdPath);
      }
    }
  }

  useEffect(() => {
    refreshProfile()
  }, [])
  
  useEffect(() => {
    refreshProfile()
  }, [userIdURL])

  return (
    <Profile 
      isOwner={!!userIdURL}
    />
  )
};


// Наш HOC
const connectHOC = connect(null, {})

const withConnectHook = compose<React.ComponentType>(
  connectHOC,
  withRouter,
  withAuthRedirect
) (ProfileConitaner)

export { withConnectHook as ProfileContainer}


// Type
type ProfileConitanerProps = ConnectType<typeof connectHOC> & RouteComponentProps<RouteParams> // Props

interface RouteParams {
  userId: undefined | string
} 
