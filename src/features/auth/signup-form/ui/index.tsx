import React from 'react'
import { Form, Formik } from 'formik'

import type { SignUp } from 'shared/api'
import { Button, Field } from 'shared/ui'
import { userLib } from 'entities/user'
import { signupModel } from 'features/auth/signup-form'

import styles from './styles.module.css'

const initialValues: SignUp = {
  name: '',
  email: '',
  password: '',
}

export const SignupForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={signupModel.createAccountFx}
      validate={userLib.validateSingUp}
    >
      <Form className={styles.form}>
        <Field name="name" placeholder="Name" />
        <Field name="email" placeholder="Email" />
        <Field name="password" placeholder="Password" type="password" />
        <Button type="submit">Sign Up</Button>
      </Form>
    </Formik>
  )
}
