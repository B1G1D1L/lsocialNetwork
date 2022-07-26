import * as Yup from 'yup'
import { ISignUp } from 'shared/api'

export const errorsCode = {
  'auth/email-already-in-use': { email: 'Email already in use' },
}

export type SigninParams = {
  email: string
  password: string
}

export const validateSingIn = (values: SigninParams) => {
  const errors = {} as SigninParams

  if (!values.email) {
    errors.email = 'Require'
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Invalid email'
  }

  if (!values.password) {
    errors.password = 'password is Require'
  } else if (values.password.length <= 5) {
    errors.password = 'Password at least 6 characters'
  }

  return errors
}

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Invalid Name')
    .max(20, 'max 20 characters')
    .required('Require'),
  email: Yup.string().email('Invalid Email').required('Require'),
  password: Yup.string().min(6, 'Password at least 6 characters'),
})

export const validateSingUp = (values: ISignUp) => {
  const errors = {} as ISignUp

  // Name
  if (!values.name) {
    errors.name = 'Name is Require'
  } else if (!/^[a-zа-яё]+$/i.test(values.name)) {
    errors.name = 'Invalid Name'
  }

  // Email
  if (!values.email) {
    errors.email = 'Invalid email'
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Invalid email'
  }

  //
  if (!values.password) {
    errors.password = 'Email is Require'
  } else if (values.password.length <= 5) {
    errors.password = 'Password at least 6 characters'
  }

  return errors
}
