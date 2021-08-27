import React from 'react';
import s from './Profile.module.css';
import User from './User/User';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div className={s.content}>
      <User profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus} />
      <MyPostsContainer  />
    </div>
  )
}

export default Profile;