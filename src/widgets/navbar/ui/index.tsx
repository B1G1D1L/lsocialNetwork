import React from 'react'

import { NavbarRow } from 'entities/navbar'
import { navigationList } from '../config'

import styles from './styles.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      {navigationList.map((link) => (
        <NavbarRow key={link.to} {...link} />
      ))}
    </nav>
  )
}
