import React from 'react';

import s from './Profile.module.css';
import User from './User/User';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile: React.FC<ProfileProps> = (props) => {
  return (
    <div className={s.content}> 
      <User {...props} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;


// Types
type ProfileProps = {
  isOwner: boolean
}