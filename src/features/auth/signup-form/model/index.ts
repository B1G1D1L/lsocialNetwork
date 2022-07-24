import { FirebaseError } from 'firebase/app'
import { createEffect } from 'effector/compat'

import { errorsCode } from '../lib'
import { userModal } from 'entities/user'
import { ISignUp, typicodeApi } from 'shared/api'

export const createAccountFx = createEffect<
  ISignUp,
  { token: string },
  FirebaseError
>(async (data) => {
  return await typicodeApi.auth.createAccountApi(data)
})

createAccountFx.doneData.watch((result) =>
  userModal.events.updateUserToken(result)
)

export const $errorRegCode = createAccountFx.finally.watch((value) => {
  if (value.status === 'fail') {
    const code = value.error.code
    return errorsCode[code as keyof typeof errorsCode] || 'Unknown error'
  }
})

export const $isLoadingReg = createAccountFx.pending
