import React from 'react'
import { NavLink } from 'react-router-dom'

import { NavbarNotice } from 'entities/navbar'
import { navigation } from './config'

import styles from './styles.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      {navigation.map(({ to, text, Icon, withNotice }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          <div className={styles.body}>
            <Icon />
            <h3>{text}</h3>
            {withNotice && <NavbarNotice count={299} />}
          </div>
        </NavLink>
      ))}
    </nav>
  )
}