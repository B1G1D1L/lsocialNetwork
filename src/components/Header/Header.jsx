import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img alt='Logo' src='https://s.cdpn.io/3/kiwi.svg'></img>
    </header>
  )
}

export default Header;