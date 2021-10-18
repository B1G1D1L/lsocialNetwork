import React from 'react';
import Preloader from './../../common/Preloader/Preloader';
import s from './User.module.css';

import guestPhoto from './../../../assets/images/user.svg';
import UserStatusHooks from './UserStatusHooks';
import { IconButton } from '@mui/material';
import styled from 'styled-components';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import UserStatusComponent from './UserStatusComponent';

const Input = styled('input')({
  display: 'none',
});


const User = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  return (
    <div className={s.user}>
      <div className={s.user__wrapper}>
        <div className={s.user__avatar}>
          <div className={s.user__img}>

            <img 
              src={props.profile.photos.small || guestPhoto}
              alt="Avatar" 
            />

            {!props.isOwner && 
            <div className={s.user__img_save}>
              <div>
                <label htmlFor="contained-button-file">
                  <Input accept="image/*"
                    id="contained-button-file"
                    multiple type="file"
                    onChange={onMainPhotoSelected}
                  />
                  <IconButton 
                    color="primary" 
                    aria-label="upload picture" 
                    component="span"
                  >
                    <PhotoCamera className={s.lol}/>
                  </IconButton>
                </label>
              </div>
            </div>}
            
          </div>
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