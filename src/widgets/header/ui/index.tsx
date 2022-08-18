import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'

import styles from './styles.module.css'
import { Field } from 'shared/ui'
import { Logo } from 'shared/ui/logo'
import { useStore } from 'effector-react/compat'
import { $userName } from 'entities/user/model'

import { SignOutBtn } from 'features/auth/signOut/ui'

export const Header = () => {
  const userName = useStore($userName)

  return (
    <header className={styles.header}>
      <div className="container">
        <Logo />

        <div className={styles.header_body}>
          <Formik
            initialValues={{ search: '' }}
            onSubmit={() => console.log('hello header seatch')}
          >
            <Form>
              <Field name="search" placeholder="Search for something here..." />
            </Form>
          </Formik>
          <Link to="/profile" className={styles.profile}>
            <h3>{userName}</h3>
            <span className={styles.profileAvatar}>
              <img
                src="https://otkritkis.ru/wp-content/uploads/2021/10/ava-180.jpg"
                alt=""
              />
            </span>
          </Link>
          <SignOutBtn />
        </div>
      </div>
    </header>
  )
}
