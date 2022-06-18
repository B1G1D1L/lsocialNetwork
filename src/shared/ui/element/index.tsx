import React from 'react'

import styles from './styles.module.css'

interface PropsType {
  children: React.ReactNode
}

export const Element = ({ children }: PropsType) => {
  return <div className={styles.wrapper}>{children}</div>
}
