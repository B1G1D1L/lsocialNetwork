import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar  = () => {
  return (
    <nav className={s.nav}>
      <NavLink to='/profile'>Profile</NavLink>
      <NavLink to='/message'>Message</NavLink>
      <NavLink to='/news'>News</NavLink>
      <NavLink to='/music'>Music</NavLink>
      <NavLink to='/setting'>Setting</NavLink>
    </nav>
  )
}

export default Navbar;