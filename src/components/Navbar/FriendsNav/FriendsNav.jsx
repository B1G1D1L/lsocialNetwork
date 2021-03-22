import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Navbar.module.css';

const FriendsNav = (props) => {
  let friends = props.friends.map((friend) => <img key={friend.id} src={friend.urlAvatar} alt={friend.name} />); 
  return (
    <div className={s.friends}>
      <NavLink className={s.friends__header} to='/friends'>
        <h2>Friends</h2>
        <span>20</span>
      </NavLink>

      <div className={s.friends__wrapper}>
        <div className={s.friends__list}>
          {friends}
        </div>
      </div>
    </div>

  )
}

export default FriendsNav;