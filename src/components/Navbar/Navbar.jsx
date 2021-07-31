import React from 'react';
import s from './Navbar.module.css';
import FriendsNav from './FriendsNav/FriendsNav';
import NavigationContainer from './Navigation/NavigationContainer';

const Navbar = (props) => {
  return (
    <div className={s.aside}>
      <NavigationContainer />
      <FriendsNav />
    </div>
  )
}

export default Navbar;