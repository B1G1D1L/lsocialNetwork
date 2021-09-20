import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img alt='Logo' src='https://s.cdpn.io/3/kiwi.svg'></img>
      {props.isAuth 
        ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
        : <NavLink to={'/login/'} className={styles.userLogin}>Login</NavLink>}
    </header>
  )
} 




export default Header;