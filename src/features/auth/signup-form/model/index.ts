import { FirebaseError } from 'firebase/app'
import { createEffect, sample } from 'effector/compat'

import { userModal } from 'entities/user'
import { createAccountApi } from 'shared/api'
import type { ISignUp, IUserData } from 'shared/api'

export const createAccountFx = createEffect<ISignUp, IUserData, FirebaseError>(
  async (data) => {
    return await createAccountApi(data)
  }
)

export const $isLoadReg = createAccountFx.pending
sample({
  clock: createAccountFx.doneData,
  target: userModal.$user,
})
