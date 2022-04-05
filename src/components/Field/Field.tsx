import React, { ChangeEvent, FormEvent } from 'react'
import cn from 'classnames'

import styles from './Field.module.css'


interface PropsType {
  placeholder?: string,
  value: string,
  maxWidth?: { maxWidth: string }
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}


export const Field = (props: PropsType) => {
  const { handleChange, handleSubmit, placeholder, value, maxWidth } = props

  return (
    <div className={styles.wrapper} style={maxWidth}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <button type='submit' className={styles.form__btn} />
        <input 
          type="text"
          onChange={handleChange}
          placeholder={placeholder}
          value={value}
          className={cn(styles.form__input)}
        />
      </form>
    </div>
  )
}
