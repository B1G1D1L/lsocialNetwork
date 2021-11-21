import React from 'react'
import { NavLink } from 'react-router-dom';
import { UsersType } from '../../types/types'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import style from './Users.module.css';
import { Button } from '@mui/material';

export default function User(props: UserProps ) {
  const { user, keyUser, followingProgress, follow, unfollow } = props
  
  return (
    <div key={keyUser} className={style.user}>
        {/* Аватар */}
      <div className={style.userAvatar}>
        <NavLink to={'/profile/' + user.id}>
          {user.photos.large !== null
            ? <img
              className={style.photo}
              src={user.photos.large}
              alt="Avatar"
            />
            : <AccountCircleIcon sx={{ fontSize: 100, color: '#b5b5b5' }} />
          }
        </NavLink>
      </div>

      <div className={style.userInfo}>
        <strong>{user.name}</strong>
        <div className={style.status}>{user.status}</div>
        {user.followed
          ?
          <Button
            variant="outlined"
            disabled={followingProgress.some((userId: number) => userId === user.id)}
            onClick={() => { unfollow(user.id) }}
          >
            Unfollow
          </Button>
          :
          <Button
            variant="contained"
            disabled={props.followingProgress.some((userId: number) => userId === user.id)}
            onClick={() => { follow(user.id) }}
          >
            Follow
          </Button>
        }
      </div>
    </div>
  )
}


type UserProps = {
  user: UsersType
  keyUser: number
  followingProgress: Array<number>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}