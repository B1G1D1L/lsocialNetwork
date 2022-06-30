import { SignUp } from 'shared/api'

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

export const validateSingUp = (values: SignUp) => {
  const errors = {} as SignUp

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
