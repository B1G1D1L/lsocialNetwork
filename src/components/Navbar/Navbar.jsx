import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = (props) => {
    let friends = props.friends.map( (friend, index) =>  <li><img src={friend.urlAvarat} alt={friend.name}/></li> );

  return (
    <div className={s.aside}>
      <nav className={s.nav}>
        <NavLink activeClassName={s.active} to='/profile'>Profile</NavLink>
        <NavLink activeClassName={s.active} to='/message'>Message</NavLink>
        <NavLink activeClassName={s.active} to='/news'>News</NavLink>
        <NavLink activeClassName={s.active} to='/music'>Music</NavLink>
        <NavLink activeClassName={s.active} to='/setting'>Setting</NavLink>
      </nav>

      <div className={s.friends}>
        <NavLink className={s.friends__header} to='/friends'>
          <h2>Friends</h2>
          <span>20</span>
        </NavLink>
        <div className={s.friends__wrapper}>
          <ul className={s.friends__list}>
            {friends}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;