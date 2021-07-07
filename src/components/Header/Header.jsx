import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img alt='Logo' src='https://s.cdpn.io/3/kiwi.svg'></img>
      {props.isAuth ? props.login : <NavLink to={'/login/'} className={s.userLogin}>Login</NavLink>}
    </header>
  )
}

export default Header;