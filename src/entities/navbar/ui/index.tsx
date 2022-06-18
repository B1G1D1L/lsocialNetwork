import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './styles.module.css'
import { ReactComponent as Feed } from './icons/feed.svg'
import { ReactComponent as Users } from './icons/users.svg'
import { ReactComponent as Messages } from './icons/messages.svg'
import { ReactComponent as Notification } from './icons/notification.svg'
import { ReactComponent as Profile } from './icons/profile.svg'
import { ReactComponent as Setting } from './icons/setting.svg'
import { ReactComponent as Logout } from './icons/logout.svg'


export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <LinkCustom to='/feed' text='Feed' >
        <Feed />
      </LinkCustom>

      <LinkCustom to='/users' text='My community' >
        <Users />
      </LinkCustom>

      <LinkCustom to='/messages' text='Messages' >
        <Messages />
      </LinkCustom>

      <LinkCustom to='/notification' text='Notification' >
        <Notification />
      </LinkCustom>

      <LinkCustom to='/profile' text='Profile' >
        <Profile />
      </LinkCustom>

      <LinkCustom to='/setting' text='Setting' >
        <Setting />
      </LinkCustom>

      <LinkCustom to='/logout' text='Logout' >
        <Logout />
      </LinkCustom>
    </nav>
  )
}


interface PropsLink {
  to: string,
  text: string,
  children: React.ReactNode
}

const styleActive = styles.active
const styleLink = styles.navLink

const LinkCustom = ({ to, text, children }: PropsLink) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return isActive ? styleActive : styleLink 
      } }
    >
      <div className={styles.body}>
        {children}
        <h3 className={styles.text}>{text}</h3>
      </div>
    </NavLink>
  )
}

