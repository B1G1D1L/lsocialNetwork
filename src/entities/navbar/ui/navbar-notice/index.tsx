import React from 'react'

import styles from './styles.module.css'

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
