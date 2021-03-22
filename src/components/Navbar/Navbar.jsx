import React from 'react';
import s from './Navbar.module.css';
import FriendsNav from './FriendsNav/FriendsNav';
import Navigation from './Navigation/Navigation';

const Navbar = (props) => {

  return (
    <div className={s.aside}>
      <Navigation />
      <FriendsNav friends={props.friends}/>
      
    </div>
  )
}

export default Navbar;