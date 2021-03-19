import React from 'react';
import s from './Profile.module.css';
import User from './User/User';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img className={s.background} alt='Background' src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'></img>
      </div>

      <User name='Ilya' age='17' sity='Ishim'/>
      <MyPosts />
    </div>
  )
}

export default Profile;