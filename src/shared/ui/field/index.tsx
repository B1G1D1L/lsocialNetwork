import React from 'react'
import cn from 'classnames'

import styles from './field.module.css'

interface PropsType {
  type?: string
  value: string
  startButtom?: boolean
  placeholder?: string
  darkTheme?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Field = (props: PropsType) => {
  const {
    type = 'string',
    onChange,
    value,
    placeholder,
    startButtom = false,
    darkTheme = false,
    onClick: onClicl
  } = props

  return (
    <div className={cn(styles.wrapper, { [styles['darkTheme']]: darkTheme })}>
      <div className={styles.form}>
        {startButtom && <button type="submit" onClick={onClicl} className={styles.form__btn} />}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={styles.form__input}
        />
      </div>
    </div>
  )
}
