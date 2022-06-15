import React from 'react'
import cn from 'classnames'

import styles from './button.module.css'

// Types
interface PropsType {
  children?: React.ReactNode
  variant?: 'text' | 'contained' | 'outlined'
  type?: 'button' | 'submit'
  disabled?: boolean
  size?: 'small' | 'medium' | 'large' | 'full'
  startIcon?: JSX.Element
  endIcon?: JSX.Element
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = (props: PropsType) => {
  const {
    children,
    type = 'button',
    variant = 'contained',
    disabled = false,
    size = 'medium',
    startIcon,
    endIcon,
    onClick,
  } = props

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(
        styles.button,
        { [styles[variant]]: variant },
        { [styles[size]]: size },
        { [styles.disabled]: disabled }
      )}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  )
}
