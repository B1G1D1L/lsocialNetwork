import React from 'react'
import { Form, Formik } from 'formik'

import { valuesSingUp } from 'shared/models'
import { Button, Element, Layout } from 'shared/ui'
import { AuthLib, FieldValidate } from 'entities/auth'

import styles from './styles.module.css'

const initialValues: valuesSingUp = {
  name: '',
  surname: '',
  email: '',
  password: '',
}

const SingUp = () => {
  const onsubmit = (e: any) => {
    console.log(e)
  }

  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.container}>
          <Element>
            <div className={styles.wrapper}>
              <h2>Registration</h2>
              <Formik
                initialValues={initialValues}
                onSubmit={onsubmit}
                validate={AuthLib.validateSingUp}
              >
                <Form>
                  <FieldValidate
                    name="name"
                    placeholder="Name"
                    className={styles.require}
                  />
                  <FieldValidate
                    name="surname"
                    placeholder="Surname"
                  />
                  <FieldValidate
                    name="email"
                    placeholder="Email"
                    type="email"
                    className={styles.require}
                  />
                  <Button type="submit">Sing Up</Button>
                </Form>
              </Formik>
            </div>
          </Element>
        </div>
      </div>
    </Layout>
  )
}

export default SingUp
