import React from 'react'
import cn from 'classnames';

import styles from './DotButton.module.css';


interface PropsType {
  size?: 'small' | 'medium'
}

export const DotButton = ({ size='medium' }: PropsType) => {
  return (
    <button className={cn(styles.button, {[styles[size]]: size})}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}
