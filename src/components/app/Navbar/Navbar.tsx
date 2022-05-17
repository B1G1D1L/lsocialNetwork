import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Navbar.module.css'
import { ReactComponent as Feed } from './../../../assets/image/feed.svg'
import { ReactComponent as Users } from './../../../assets/image/users.svg'
import { ReactComponent as Messages } from './../../../assets/image/messages.svg'
import { ReactComponent as Notification } from './../../../assets/image/notification.svg'
import { ReactComponent as Profile } from './../../../assets/image/profile.svg'
import { ReactComponent as Setting } from './../../../assets/image/setting.svg'
import { ReactComponent as Logout } from './../../../assets/image/logout.svg'


export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <LinkCustom to='/feed' text='Feed' >
        <Feed />
      </LinkCustom>

      <LinkCustom to='/Users' text='Users' >
        <Users />
      </LinkCustom>

      <LinkCustom to='/Messages' text='Messages' >
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
const styleLink = styles.nav__link

const LinkCustom = ({ to, text, children }: PropsLink) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return isActive ? styleActive : styleLink 
      } }
    >
      <div className={styles.nav__body}>
        {children}
        <h3 className={styles.nav__text}>{text}</h3>
      </div>
    </NavLink>
  )
}

