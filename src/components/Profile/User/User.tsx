import React, { ChangeEvent } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './User.module.css';

import guestPhoto from './../../../assets/images/user.svg';
import UserStatusHooks from './UserStatusHooks';
import { IconButton } from '@mui/material';
import styled from 'styled-components'; 
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { ProfileType } from '../../../types/types';
import { Nullable } from '../../../Redax/redax-store';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, getStatus } from '../../../Redax/selectors/profile-selectors';
import { getIsAuth } from '../../../Redax/selectors/auth.selectors';
import { savePhoto } from '../../../Redax/reducers/profile-reducer';

const Input = styled('input')({
  display: 'none',
});


const User: React.FC<PropsType > = (props) => {
  const { isOwner, updateStatus } = props

  const dispatch = useDispatch()
  const profile = useSelector(getProfile)
  const status = useSelector(getStatus)

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
          <UserStatusHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    </div>
  )
};

export default User;


// Types
type PropsType = {
  profile: Nullable<ProfileType>
  isOwner: boolean
  status: string
  userId: Nullable<number>
  savePhoto: (file: File) => Promise<any> 
  updateStatus: (newStatus: string) => Promise<any>
}