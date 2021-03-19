import React from 'react';
import s from './Navbar.module.css';

const Navbar  = () => {
  return (
    <nav className={s.nav}>
      <a href='#4'>Profile</a>
      <a href='#4'>Message</a>
      <a href='#4'>News</a>
      <a href='#4'>Music</a>
      <a href='#4'>Setting</a>
    </nav>
  )
}

export default Navbar;