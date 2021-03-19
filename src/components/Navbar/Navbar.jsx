import React from 'react';
import s from './Navbar.module.css';

const Navbar  = () => {
  return (
    <nav className={s.nav}>
      <a href='/profile'>Profile</a>
      <a href='/message'>Message</a>
      <a href='/news'>News</a>
      <a href='/music'>Music</a>
      <a href='/setting'>Setting</a>
    </nav>
  )
}

export default Navbar;