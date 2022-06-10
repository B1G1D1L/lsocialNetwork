import React, { ChangeEvent } from 'react'
import cn from 'classnames'
import { useFormik } from 'formik'

import styles from './RegistrationPage.module.css'
import { Button } from '@components/app'

export const RegistrationPage = () => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.id)
  }

  return (
    <div className={'container__body'}>
      <div className={'body__item'}>
        <h2 className={styles.title}>Registration</h2>

        <div className={styles.steps}>
          <div className={styles.step}>
            <h4 className={styles.stepTitle}>Name and surname</h4>
            <div className={styles.stepWrapper}>
              <Field onChange={onChange} placeholder='Name' id='name' require />
              <Field onChange={onChange} placeholder='Surname' id='surname' require />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface PropsField {
  type?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  id: string
  placeholder: string
  require: boolean
}

const Field = (props: PropsField) => {
  const { type = 'string', onChange, placeholder, require, id } = props

  return (
    <input
      type={type}
      onChange={onChange}
      id={id}
      placeholder={placeholder}
      className={cn(styles.input, { [styles['inputRequire']]: require })}
    />
  )
}
