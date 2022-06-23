export type SingupParams = {
  email: string
  password: string
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
    errors.password = 'Require'
  } else if (values.password.length <= 5) {
    errors.password = 'Password at least 6 characters'
  }

  return errors
}

export const validateSingUp = (values: SingupParams) => {
  const errors = {} as SingupParams

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
