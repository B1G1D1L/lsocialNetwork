import React from 'react'
import cn from 'classnames'
import { ErrorMessage, useField } from 'formik'

import styles from './styles.module.css'

interface PropsType {
  name: string
  type?: 'text' | 'number' | 'password' | 'email'
  placeholder: string
  className?: string
}

export const Field = (props: PropsType) => {
  const [field, meta] = useField(props)

  return (
    <div className={cn(props.className, styles.wrapper)}>
      <input
        {...props}
        {...field}
        className={cn({ [styles['errInput']]: meta.error && meta.touched })}
      />
      <ErrorMessage name={props.name}>
        {(msg) => <span>{msg}</span>}
      </ErrorMessage>
    </div>
  )
}
