import React from 'react'
import { useFormik } from 'formik';
import cn from 'classnames';

import { Button } from '@components/app';
import styles from './LoginPage.module.css'

interface formValues {
  email: string,
  password: string,
}





export const LoginPage = () => {

  const onSubmitFrom = (form: { email: string, password: string }) => {
    console.log(form)
  }

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: onSubmitFrom,
    validate,
  })

  return (
    <div className={cn(styles.login, 'container__body')}>
      <div className={cn(styles.login__container, 'body__item')}>
        <h2>Авторизация</h2>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <div className={styles.form__item}>
            <label htmlFor="emailLogin">Email</label>
            <input
              id='emailLogin'
              type="email"
              name='email'
              placeholder='Email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={cn(
                {[styles.inputError]: formik.errors.email && formik.touched.email}
              )}
            />
            {formik.errors.email && formik.touched.email
              ? <div className={styles.error}>{formik.errors.email}</div>
              : null
            }
          </div>

          <div className={styles.form__item}>
            <label htmlFor="passwordLogin">Email</label>
            <input
              id='passwordLogin'
              type="password"
              name='password'
              placeholder='Password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={cn(
                {[styles.inputError]: formik.errors.password && formik.touched.password}
              )}
            />
            {formik.errors.password && formik.touched.password
              ? <div className={styles.error}>{formik.errors.password}</div>
              : null
            }
          </div>

          <Button size='large' type='submit'>Логин</Button>
        </form>
      </div>
    </div>
  )
}




const validate = (values: formValues) => {
  const errors = {} as formValues

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Incorrect email'
  }

  if (!values.password) {
    errors.password = 'Require'
  } else if (values.password.length < 8) {
    errors.password = 'Password less than 8 characters'
  }

  return errors
}
