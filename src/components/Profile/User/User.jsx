import React from 'react';
import Preloader from './../../common/Preloader/Preloader';
import s from './User.module.css';

import userPhoto from './../../../assets/images/user.svg';
import UserStatusHooks from './UserStatusHooks';
// import UserStatusComponent from './UserStatusComponent';

const User = (props) => {
  if(!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  return (
    <div className={s.user}>
      <div className={s.user__info}>
        <div className={s.user__avatar}>
          <img src={props.profile.photos.small || userPhoto} alt="Avatar" />
          {
            !props.isOwner && <input type='file' onChange={onMainPhotoSelected} />
          }
        </div>

        <div className={s.user__description}>
          <div>{props.profile.fullName}</div>
          <UserStatusHooks status={props.status} updateStatus={props.updateStatus} />
          <div>{props.profile.aboutMe || null}</div>
        </div>
      </div>
    </div>
  )
};

export default User;