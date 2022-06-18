import React from 'react'
import { NavLink } from 'react-router-dom'

import { navigation } from './config'

import styles from './styles.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      {navigation.map((link) => (
        <LinkCustom {...link} />
      ))}
    </nav>
  )
}

interface PropsLink {
  to: string
  text: string
  Icon: any
}

const LinkCustom = ({ to, text, Icon }: PropsLink) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return isActive ? styles.active : ''
      }}
    >
      <div className={styles.body}>
        <Icon />
        <h3 className={styles.text}>{text}</h3>
      </div>
    </NavLink>
  )
}
