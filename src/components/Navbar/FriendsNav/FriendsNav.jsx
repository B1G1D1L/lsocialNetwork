import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Navbar.module.css';

const FriendsNav = (props) => {
  // let friends = props.friends.map((friend, index) => {
  //   if (index < 6) {
  //     return <img key={friend.id} src={friend.urlAvatar} alt={friend.name} />
  //   } 
  //   return false;
  // }); 
  
  return (
    <div className={s.friends}>
      <NavLink className={s.friends__header} to='/friends'>
        {/* <h2>Friends</h2>
        <span>{props.friends.length}</span> */}
      </NavLink>

      <div className={s.friends__wrapper}>
        <div className={s.friends__list}>
          {/* {friends} */}
        </div>
      </div>
    </div>

  )
}

export default FriendsNav;