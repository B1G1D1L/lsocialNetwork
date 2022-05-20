import React from 'react';
import cn from 'classnames';

import styles from './Button.module.css';

// Types
interface PropsType {
  children: React.ReactNode
  type?: "button" | "submit" | "reset"
  transparent?: boolean
  outline?: boolean
}



export const Button = (props: PropsType) => {
  const { 
    type='button', 
    outline = false, 
    transparent = false,
    children 
  } = props

  return (
    <button 
      type={type}
      className={cn(
        styles.button,
        {[styles.outline]: outline},
        {[styles.transparent]: transparent}
      )}
    >
      {children}
    </button>
  )
}
