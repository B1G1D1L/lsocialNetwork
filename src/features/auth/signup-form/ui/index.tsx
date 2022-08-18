import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { createEffect, sample } from 'effector/compat'
import { useStore } from 'effector-react/compat'
import { Form, Formik } from 'formik'
import { FirebaseError } from 'firebase/app'

import { $isAuth } from 'entities/user/model'
import { Button, Field } from 'shared/ui'
import { authApi } from 'shared/api'
import type { ISignUp } from 'shared/api'
import { errorsCode, SignupSchema } from '../lib'

import styles from './styles.module.css'

const initialValues: ISignUp = {
  name: '',
  email: '',
  password: '',
}

export const SignupForm = () => {
  const isAuth = useStore($isAuth)
  const isPending = useStore(authApi.createAccountFx.pending)

  const handleSubmit = (data: ISignUp, actions: any) => {
    authApi.createAccountFx(data)
    const setErrors = createEffect((value: FirebaseError) => {
      const errorCode = value.code
      actions.setErrors(errorsCode[errorCode as keyof typeof errorsCode])
    })
    sample({
      clock: authApi.createAccountFx.failData,
      target: setErrors,
    })
  }

  if (isAuth) {
    return <Navigate to="/feed" />
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
        <Button type="submit" disabled={isPending}>
          Sign Up
        </Button>
        <Link to="/signin" className={styles.link}>
          Authorization
        </Link>
      </Form>
    </Formik>
  )
}
