import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Navbar.module.css';

const Navigation = (props) => {
  return (
    <nav className={s.nav}>
      <NavLink 
        exact to={`/profile/`} 
        activeClassName={s.active} 
      >
        Profile
      </NavLink>

      <NavLink 
        to='/message' 
        activeClassName={s.active} 
      >
        Message
      </NavLink>

      <NavLink 
        to='/news'
        activeClassName={s.active}
      >
        News
      </NavLink>

      <NavLink 
        to='/music'
        activeClassName={s.active} 
      >
        Music
      </NavLink>

      <NavLink 
        to='/setting'
        activeClassName={s.active} 
      >
        Setting
      </NavLink>
      
      <NavLink 
        to='/users' 
        activeClassName={s.active} 
      >
        Users
      </NavLink>
    </nav>
  )
}

export default Navigation;