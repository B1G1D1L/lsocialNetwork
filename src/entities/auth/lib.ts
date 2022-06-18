import { valuesSingIn, valuesSingUp } from 'shared/models'

export const validateSingIn = (values: valuesSingIn) => {
  const errors = {} as valuesSingIn

  if (!values.email) {
    errors.email = 'Require'
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Invalid email'
  }

  if (!values.password) {
    errors.password = 'Require'
  } else if (values.password.length <= 5) {
    errors.password = 'Password at least 6 characters'
  }

  return errors
}

export const validateSingUp = (values: valuesSingUp) => {
  const errors = {} as valuesSingUp

  if(!values.name) {
    errors.name = 'Reuire'
  }

  if(!values.email) {
    errors.email = 'Invalid email'
  } else if(!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Invalid email'
  }

  if (!values.password) {
    errors.password = 'Require'
  } else if (values.password.length <= 5) {
    errors.password = 'Password at least 6 characters'
  }

  return errors
}
