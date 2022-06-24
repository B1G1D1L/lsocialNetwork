import React from 'react'
import { Form, Formik } from 'formik'

import type { SignUp } from 'shared/api'
import { Button } from 'shared/ui'
import { authModal, FieldValidate } from 'entities/auth'
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
        <FieldValidate name="email" placeholder="Email" />
        <FieldValidate name="password" placeholder="Password" type='password' />
        <Button type="submit">Sign Up</Button>
      </Form>
    </Formik>
  )
}
