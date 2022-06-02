import { Button } from '@components/app';
import { useFormik } from 'formik';
import React from 'react'

import styles from './LoginPage.module.css'

interface formValues {
  email: String,
  password: String,
}





export const LoginPage = () => {

  const onSubmitFrom = (form: { email: String, password: String }) => {
    console.log(form)
  }

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validate,
    onSubmit: onSubmitFrom,
  })

  return (
    <div className='container__body'>
      <div className={styles.login}>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="emailLogin">Email</label>
          <input
            id='emailLogin'
            type="email"
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email
            ? <div>{formik.errors.email}</div>
            : null
          }

          <label htmlFor="passwordLogin">Email</label>
          <input
            id='passwordLogin'
            type="password"
            name='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password
            ? <div>{formik.errors.password}</div>
            : null
          }

          <Button type='submit'>Логин</Button>
        </form>
      </div>
    </div>
  )
}




const validate = (values: any) => {
  const errors = {} as formValues

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Некоректный email'
  }

  if (!values.password) {
    errors.password = 'Require'
  } else if (values.password.length < 8) {
    errors.password = 'Пароль меньше 8 символов'
  }

  return errors
}
