import React from 'react'
import { Form, Formik } from 'formik'
import { Link } from 'react-router-dom'
import { Button, Field } from 'shared/ui'
import { authApi } from 'shared/api'
import type { ISignIn } from 'shared/api'
import styles from 'styles.module.css'
import { useStore } from 'effector-react/compat'
import { SigninSchema } from '../lib'

const initialValues: ISignIn = {
  email: '',
  password: '',
}

export const SigninForm = () => {
  const isPending = useStore(authApi.signInFx.pending)

  const handleSubmit = (data: ISignIn, actions: any) => {}

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SigninSchema}
    >
      <Form className={styles.form}>
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
