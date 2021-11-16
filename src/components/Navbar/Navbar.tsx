import React from 'react';
import s from './Navbar.module.css';
import { NavigationContainer } from './Navigation/NavigationContainer';

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <div className={s.aside}>
      <NavigationContainer />
    </div>
  )
}

export default Navbar;


// Types
type NavbarProps = {}