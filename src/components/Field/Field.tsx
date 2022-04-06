import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import cn from 'classnames'

import styles from './Field.module.css'


interface PropsType {
  placeholder?: string,
  maxWidth?: string 
  onChange: (value: string) => void,
  onSubmit: (value: string) => void
}


export const Field = (props: PropsType) => {
  const { onChange, onSubmit, placeholder, maxWidth } = props
  const [value, setValue] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(value)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.trim())
  }

  useEffect(() => {
    onChange(value)
  }, [value])
  

  return (
    <div 
      className={styles.wrapper} 
      style={{maxWidth: maxWidth }}
    >
      <form onSubmit={handleSubmit} className={styles.form}>
        <button type='submit' className={styles.form__btn} />
        <input 
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className={cn(styles.form__input)}
        />
      </form>
    </div>
  )
}
