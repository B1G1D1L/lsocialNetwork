import React from 'react'
import { NavLink } from 'react-router-dom'
import { navigationList } from '../config'
import { useStore } from 'effector-react/compat'
import { $notification } from 'entities/notification/model'
import { $isAuth } from 'entities/user/model'
import { INotifications } from 'shared/api'
import type { InavigationList } from '../config'

import styles from './styles.module.css'

export const Navbar = () => {
  const notification = useStore($notification)
  const isAuth = useStore($isAuth)

  if (!isAuth) return <Plug />

  return (
    <nav className={styles.nav}>
      {navigationList.map((link) => (
        <Link
          key={link.to}
          notification={notification[link.to as keyof INotifications]}
          {...link}
        />
      ))}
    </nav>
  )
}

interface NavbarRowProps extends InavigationList {
  notification?: number
}

function Link({ to, text, Icon, notification }: NavbarRowProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? styles.activeLink : '')}
    >
      <div className={styles.wrapper}>
        <Icon />
        <h3>{text}</h3>
        {notification && <Notice count={notification} />}
      </div>
    </NavLink>
  )
}

function Notice({ count }: { count: number }) {
  const [currentCount, setCurrentCount] = React.useState<number | string>(0)

  // Change displayed value
  React.useEffect(() => {
    count >= 100 ? setCurrentCount('+99') : setCurrentCount(count)
  }, [count])

  if (count === 0) return null

  return <span className={styles.notice}>{currentCount}</span>
}

function Plug() {
  return (
    <div>
      <h2 className={styles.plugTitle}>
        Welcom to <span>BceTi</span>
      </h2>
      <p className={styles.plugText}>You need to log in to start chatting.</p>
    </div>
  )
}
