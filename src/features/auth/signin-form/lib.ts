import * as Yup from 'yup'

export const errorsCode = {
  'auth/email-already-in-use': { email: 'Email already in use' },
}

export const SigninSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Invalid Name')
    .max(20, 'max 20 characters')
    .required('Require'),
  email: Yup.string().email('Invalid Email').required('Require'),
  password: Yup.string().min(6, 'Password at least 6 characters'),
})
