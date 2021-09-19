import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img alt='Logo' src='https://s.cdpn.io/3/kiwi.svg'></img>
      {props.isAuth 
        ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
        : <NavLink to={'/login/'} className={s.userLogin}>Login</NavLink>}
    </header>
  )
} 




export default Header;