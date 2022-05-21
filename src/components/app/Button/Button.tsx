import React from 'react';
import cn from 'classnames';

import styles from './Button.module.css';

// Types
interface PropsType {
  children: React.ReactNode,
  type?: "button" | "submit" | "reset"
  fullWidth?: boolean
  outline?: boolean
  transparent?: boolean
  onClick?: () => void,
}



export const Button = (props: PropsType) => {
  const { 
    children,
    type='button',
    fullWidth, 
    outline = false, 
    transparent = false,
    onClick,
  } = props

  return (
    <button 
      onClick={onClick}
      type={type}
      className={cn(
        styles.button,
        {[styles.outline]: outline},
        {[styles.transparent]: transparent},
        {[styles.width]: fullWidth}
      )}
    >
      {children}
    </button>
  )
}
