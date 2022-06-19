import React from 'react'
import { NavLink } from 'react-router-dom'

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

// Notigication count
interface PropsType {
  count: number
}

export const NavbarNotice = ({ count }: PropsType) => {
  // Displayed value
  const [currentCount, setCurrentCount] = React.useState<number | string>(0)

  // Change displayed value
  React.useEffect(() => {
    if (count >= 100) {
      setCurrentCount('+99')
    } else {
      setCurrentCount(count)
    }
  }, [count])

  if (currentCount === 0) return null

  return <span className={styles.wrapper}>{currentCount}</span>
}
