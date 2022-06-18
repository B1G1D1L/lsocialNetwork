import React from 'react'
import { Form, Formik } from 'formik'

import { AuthLib, FieldValidate } from 'entities/auth'
import { Button, Element, Layout } from 'shared/ui'
import { valuesSingIn } from 'shared/models'

import styles from './styles.module.css'

// Initial Values
const initialValues: valuesSingIn = {
  email: '',
  password: '',
}

const SignIn = () => {
  const onSubmit = (e: any) => {
    console.log(e)
  }

  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.container}>
          <Element>
            <h2>Sing in</h2>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validate={AuthLib.validateSingIn}
            >
              <Form>
                <FieldValidate name="email" placeholder="Email" />
                <FieldValidate
                  name="password"
                  placeholder="password"
                  type="password"
                />
                <Button type="submit">Sing In</Button>
              </Form>
            </Formik>
          </Element>
        </div>
      </div>
    </Layout>
  )
}

export default SignIn
