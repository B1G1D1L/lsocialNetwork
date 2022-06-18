import { Formik } from 'formik'
import React from 'react'
import { Element, Layout } from 'shared/ui'

import styles from './styles.module.css'

const AuthPage = () => {
  const onSubmit = () => {
    console.log('hello')
  }

  return (
    <Layout>
      <div className={styles.container}>
        <Element>
          <h2>Sing in</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}
          ></Formik>
        </Element>
      </div>
    </Layout>
  )
}

// Initial Values
const initialValues = {
  email: '',
  password: '',
}

// Validate
const validate = (values: typeof initialValues) => {
  const errors = {} as typeof initialValues

  if (!values.email) {
    errors.email = 'Require'
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'invalid email'
  }

  if (!values.password) {
    errors.password = 'Require'
  }

  return errors
}

export default AuthPage
