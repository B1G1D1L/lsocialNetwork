import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Navbar.module.css';

const Navigation = (props) => {
  return (
    <nav className={s.nav}>
      <NavLink activeClassName={s.active} to='/profile'>Profile</NavLink>
      <NavLink activeClassName={s.active} to='/message'>Message</NavLink>
      <NavLink activeClassName={s.active} to='/news'>News</NavLink>
      <NavLink activeClassName={s.active} to='/music'>Music</NavLink>
      <NavLink activeClassName={s.active} to='/setting'>Setting</NavLink>
      <NavLink activeClassName={s.active} to='/users'>Users</NavLink>
    </nav>
  )
}

export default Navigation;