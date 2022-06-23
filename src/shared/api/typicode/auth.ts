import { createUserWithEmailAndPassword } from 'firebase/auth'
import { typicodeApi } from 'shared/api'

export type CreateAccountParams = {
  email: string
  password: string
}

export const createAccount = async (params: CreateAccountParams) => {
  return await createUserWithEmailAndPassword(
    typicodeApi.base.auth,
    params.email,
    params.password
  )
}
