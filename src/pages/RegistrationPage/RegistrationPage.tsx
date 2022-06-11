import React, { ChangeEvent } from 'react'
import cn from 'classnames'
import {
  FormikHelpers,
  useFormik,
  useField,
  Form,
  Formik,
  ErrorMessage,
} from 'formik'

import styles from './RegistrationPage.module.css'
import { Button } from '@components/app'

interface Values {
  name: string
  surname: string
  phone: number
}

export const RegistrationPage = () => {
  const onSubmitForm = () => {
    console.log(3333)
  }

  return (
    <div className={'container__body'}>
      <Formik
        initialValues={{ name: '', surname: '', phone: 0 }}
        onSubmit={onSubmitForm}
        validate={validate}
      >
        <div className={'body__item'}>
          <h2 className={styles.title}>Registration</h2>

          <Form className={styles.steps}>
            <div className={styles.step}>
              <h4 className={styles.stepTitle}>Name and surname</h4>
              <div className={styles.stepWrapper}>
                <FieldPage name="name" placeholder="Name" require />
                <FieldPage name="surname" placeholder="Surname" require />
              </div>
            </div>

            <div className={styles.step}>
              <h4 className={styles.stepTitle}>contacts</h4>
              <div className={styles.stepWrapper}>
                <FieldPage name="phone" placeholder="Phone" type="number" />
              </div>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  )
}

// Field
interface PropsField {
  name: string
  type?: string
  require?: boolean
  placeholder: string
}

const FieldPage = (props: PropsField) => {
  const { name, type = 'string', placeholder, require } = props
  const [field, meta] = useField(props)

  return (
    <div
      className={cn(styles.imputWrapper, { [styles['inputRequire']]: require })}
    >
      <input
        {...field}
        name={name}
        type={type}
        placeholder={placeholder}
        className={cn(styles.input, {
          [styles['inputError']]: meta.error && meta.touched,
        })}
      />
      <ErrorMessage name={name}>
        {(msg) => <div className={styles.errorMessage}>{msg}</div>}
      </ErrorMessage>
    </div>
  )
}

// Validate
interface ErrorValue {
  name: string
  surname: string
  phone: string
}

const validate = (values: Values) => {
  const errors = {} as ErrorValue

  if (!values.name) {
    errors.name = 'Require!'
  }

  if (!values.surname) {
    errors.surname = 'Require'
  }

  if (
    values.phone &&
    !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i.test(String(values.phone))
  ) {
    errors.phone = 'Invalid number'
  }

  return errors
}
