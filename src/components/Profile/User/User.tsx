import React, { ChangeEvent } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './User.module.css';

import guestPhoto from './../../../assets/images/user.svg';
import UserStatusHooks from './UserStatusHooks';
import { IconButton } from '@mui/material';
import styled from 'styled-components'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../../Redax/selectors/profile-selectors';
import { getUserId } from '../../../Redax/selectors/auth.selectors';
import { savePhoto } from '../../../Redax/reducers/profile-reducer';

const Input = styled('input')({
  display: 'none',
});


const User: React.FC<PropsType > = (props) => {
  const { isOwner } = props

  const dispatch = useDispatch()
  const profile = useSelector(getProfile) 
   

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {   
      dispatch(savePhoto(e.target.files[0]))
    }
  }

  return (
    <div className={s.user}>
      <div className={s.user__wrapper}>
        <div className={s.user__avatar}>
          <div className={s.user__img}>

            <img 
              src={profile.photos.large || guestPhoto}
              alt="Avatar" 
            />

            {!isOwner && 
            <div className={s.user__img_save}>
              <div>
                <label htmlFor="contained-button-file">
                  <Input 
                    accept="image/*"
                    id="contained-button-file"
                    multiple type="file"
                    onChange={onMainPhotoSelected}
                  />
                  <IconButton 
                    color="primary" 
                    aria-label="upload picture" 
                    component="span"
                  >
                    <AddAPhotoIcon sx={{ color: 'white' }} fontSize="large" className={s.lol}/>
                  </IconButton>
                </label>
              </div>
            </div>}
            
          </div>
        </div>

        <div className={s.user__description}>
          <div>{profile.fullName}</div>
          <UserStatusHooks />
        </div>
      </div>
    </div>
  )
};

export default User;


// Types
type PropsType = {
  isOwner: boolean
}