import React from 'react'
import { NavLink } from 'react-router-dom'

import { navigation } from './config'

import styles from './styles.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      {navigation.map(({ to, text, Icon }) => (
        <NavLink
          to={to}
          className={({isActive}) => (isActive ? styles.active : undefined)}
        >
          <div className={styles.body}>
            <Icon />
            <h3>{text}</h3>
          </div>
        </NavLink>
      ))}
    </nav>
  )
}