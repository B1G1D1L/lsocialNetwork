import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Users.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';

const Users = (props) => {
  const {
    totalUsersCount,
    pageSize,
    currentPage,
    users,
    onPageChanged,
    unfollow,
    follow 
  } = props;

  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    {/* Навигация */}
    <div className={style.numberPages}>
      {pages.map((page, index) => {
        return (
          <span
            className={currentPage === page ? style.selected : ''}
            key={index}
            onClick={(e) => { onPageChanged(page) }}
          >
            {page}
          </span>
        )
      })}
    </div>

    {/* Кол-ва людей */}
    <div className={style.numberPeople}>Люди: {totalUsersCount}</div>

    {/* Список пользователей */}
    {users.map((user, index) =>
      <div key={index} className={style.user}>

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
              disabled={props.followingProgress.some(userId => userId === user.id)}
              onClick={() => { unfollow(user.id) }}
            >
              Unfollow
            </Button>
            :
            <Button
              variant="contained"
              disabled={props.followingProgress.some(userId => userId === user.id)}
              onClick={() => { follow(user.id) }}
            >
              Follow
            </Button>
          }
        </div>
      </div>
    )}
  </div>
}


export default Users;