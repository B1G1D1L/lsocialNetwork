import React from 'react';
import Preloader from './../../common/Preloader/Preloader';
import s from './User.module.css';

import userPhoto from './../../../assets/images/user.svg';
import UserStatus from './UserStatus';
// import UserStatusComponent from './UserStatusComponent';

const User = (props) => {
  if(!props.profile) {
    return <Preloader />
  }

  return (
    <div className={s.user}>
      <div className={s.user__info}>
        <div className={s.user__avatar}>
          <img src={props.profile.photos.small || userPhoto} alt="Avatar" />
        </div>

        <div className={s.user__description}>
          <div>{props.profile.fullName}</div>
          <UserStatus status={props.status} updateStatus={props.updateStatus} />
          <div>{props.profile.aboutMe || null}</div>
        </div>
      </div>
    </div>
  )
};

export default User;