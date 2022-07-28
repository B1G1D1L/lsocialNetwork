import React from 'react'
import { Form, Formik } from 'formik'
import { createEffect, sample } from 'effector/compat'

import { signupModel } from 'features/auth/signup-form'
import { Button, Field } from 'shared/ui'
import type { ISignUp } from 'shared/api'
import { errorsCode, SignupSchema } from '../lib'

import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { FirebaseError } from 'firebase/app'

const initialValues: ISignUp = {
  name: '',
  email: '',
  password: '',
}

export const SignupForm = () => {
  const handleSubmit = (data: ISignUp, actions: any) => {
    signupModel.createAccountFx(data)

    const setErrors = createEffect((value: FirebaseError) => {
      const errorCode = value.code
      actions.setErrors(errorsCode[errorCode as keyof typeof errorsCode])
    })

    sample({
      clock: signupModel.createAccountFx.failData,
      target: setErrors,
    })
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
    >
      <Form className={styles.form}>
        <Field name="name" placeholder="Name" />
        <Field name="email" placeholder="Email" />
        <Field name="password" placeholder="Password" type="password" />
        <Button type="submit">Sign Up</Button>
        <Link to="/signin">Authorization</Link>
      </Form>
    </Formik>
  )
}
