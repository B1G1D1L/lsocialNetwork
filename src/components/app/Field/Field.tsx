import React from 'react'
import cn from 'classnames'

import styles from './Field.module.css'


interface PropsType {
  value: string
  placeholder?: string,
  maxWidth?: string,
  classNames?: string[],
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}


export const Field = (props: PropsType) => {
  const { onChange, value, placeholder, maxWidth, classNames } = props

  return (
    <div 
      className={styles.wrapper} 
      style={{maxWidth: maxWidth }}
    >
      <div className={cn(styles.form, (classNames && [...classNames]))}>
        <button type='submit' className={styles.form__btn} />
        <input 
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={cn(styles.form__input)}
        />
      </div>
    </div>
  )
}
