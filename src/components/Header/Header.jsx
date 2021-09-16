import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import arrow from '../../assets/images/arrow.svg';
import userPhoto from '../../assets/images/user.svg';


const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img alt='Logo' src={logo} /> 
        <span>cети</span>
      </div>  
      {props.isAuth ? <Аuthorization photo={props.photo} name={props.login} /> : 'noy'  }
    </header>
  )
} 

const Аuthorization = (props) => {
  return (
    <div className={styles.auth}>
      <div>
        <span className={styles.name}>{props.name}</span>
        <img className={styles.arrow} src={arrow} />
        <img className={styles.photo} src={props.photo || userPhoto} alt="photo" />
      </div>
      <div className={styles.menu}>
        <span>Profile</span>
        <span>Setting</span>
        <span>Exit</span>
      </div>
    </div>
  )
}

export default Header;