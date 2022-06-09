import React from 'react'
import cn from 'classnames';

import styles from './DotButton.module.css';

export const DotButton = () => {
  return (
    <button className={styles.button}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}
