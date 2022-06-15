import React from 'react'
import cn from 'classnames'

import styles from './styles.module.css'

interface PropsType {
  children: React.ReactNode
  extended?: boolean
}

export const Layout = ({ children, extended }: PropsType) => {
  return (
    <div className={cn(styles.container, { [styles.extended]: extended })}>
      {children}
    </div>
  )
}
