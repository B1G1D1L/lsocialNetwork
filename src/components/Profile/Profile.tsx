import React from 'react';

import s from './Profile.module.css';
import User from './User/User';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../types/types';
import { Nullable } from '../../Redax/redax-store';


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
  profile: Nullable<ProfileType> 
  status: string 
  isOwner: boolean
  userId: Nullable<number>

  updateStatus: (status: string) => Promise<any> 
  savePhoto: (file: File) => Promise<any> 
}