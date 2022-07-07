import {userModal} from 'entities/user'
import { SignUp, typicodeApi } from 'shared/api'

// export const createAccountFx = createEffect(typicodeApi.auth.createAccount)

export const createAccountFx = async (data: SignUp) => {
  await typicodeApi.auth.createAccountApi(data, userModal.updateUser)
}