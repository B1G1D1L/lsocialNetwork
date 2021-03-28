import React from 'react';
import s from './Profile.module.css';
import User from './User/User';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
  return (
    <div className={s.content}>
      <User name='Ilya'
        age='17'
        sity='Ishim'
        urlAvatar='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
      
      <MyPosts posts={props.posts}
              addPost={props.addPost}
              updateTextPost={props.updateTextPost} />
    </div>
  )
}

export default Profile;