import React from 'react'
import { Form, Formik } from 'formik'

import type { SignUp } from 'shared/api'
import { Button, Field } from 'shared/ui'
import { authModal } from 'entities/auth'
import { AuthLib } from 'entities/auth'

const initialValues: SignUp = {
  email: '',
  password: '',
}

export const SignupForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={authModal.createAccountFx}
      validate={AuthLib.validateSingUp}
    >
      <Form>
        <Field name="email" placeholder="Email" />
        <Field name="password" placeholder="Password" type='password' />
        <Button type="submit">Sign Up</Button>
      </Form>
    </Formik>
  )
}
