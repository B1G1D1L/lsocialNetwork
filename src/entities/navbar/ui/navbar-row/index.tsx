import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './styles.module.css'

interface NavbarRowProps {
  to: string
  text: string
  Icon: any
  notification?: number
}

export const NavbarRow = ({ to, text, Icon, notification }: NavbarRowProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? styles.active : '')}
    >
      <div className={styles.body}>
        <Icon />
        <h3>{text}</h3>
        {notification && <NavbarNotice count={notification} />}
      </div>
    </NavLink>
  )
}

const NavbarNotice = ({ count }: { count: number }) => {
  // Displayed value
  const [currentCount, setCurrentCount] = React.useState<number | string>(0)

  // Change displayed value
  React.useEffect(() => {
    count >= 100 ? setCurrentCount('+99') : setCurrentCount(count)
  }, [count])

  if (count === 0) return null

  return <span className={styles.notice}>{currentCount}</span>
}
