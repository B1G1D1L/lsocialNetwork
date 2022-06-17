import React from 'react'
import { Link } from 'react-router-dom'
import logo from './image/logo.svg'

import styles from './styles.module.css'


export const Logo = () => {
  return (
    <Link to="/feed" className={styles.logo}>
      <span>
        <img src={logo} alt="logo" />
      </span>
      <h2>BceTi</h2>
    </Link>
  )
}
