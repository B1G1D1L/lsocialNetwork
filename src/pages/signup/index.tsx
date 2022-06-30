import React from 'react'

import { Element, Layout } from 'shared/ui'
import { SignupForm } from 'features/auth/signup-form'
import styles from './styles.module.css'

const SignUp = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.container}>
          <Element>
            <div className={styles.wrapper}>
              <h2>Registration</h2>
              <SignupForm />
            </div>
          </Element>
        </div>
      </div>
    </Layout>
  )
}

export default SignUp
