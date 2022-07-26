import { FirebaseError } from 'firebase/app'
import { createEffect } from 'effector/compat'

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

export const $isLoadingReg = createAccountFx.pending
