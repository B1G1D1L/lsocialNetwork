import { createEffect } from 'effector/compat'
import { typicodeApi } from 'shared/api'
import { $user } from './user'

export const createAccountFx = createEffect(typicodeApi.auth.createAccount)

// createAccountFx.doneData.watch((response) => {
//   console.log(response)
// })

createAccountFx.failData.watch((error) => console.log(error))

$user.on(createAccountFx.doneData, (_, data) => data)

$user.watch((store) => {
  console.log(store)
})

const $createIsLoading = createAccountFx.pending
