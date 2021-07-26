import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './User.module.css';

const User = (props) => {
  if(!props.profile) {
    return <Preloader />
  }

  return (
    <div className={s.user}>
      <div>
        <img className={s.user__background} alt='Background' src={(props.urlAvatar)}></img>
      </div>
      
      <div className={s.user__info}>
        <div className={s.user__avatar}>
          <img src={props.profile.photos.small} alt="Avatar" />
        </div>

        <div className={s.user__description}>
          <div>Name: {props.profile.fullName}</div>
          <div>About me: {props.profile.aboutMe}</div>
        </div>
      </div>
    </div>
  )
};

export default User;