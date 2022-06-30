import { createEffect } from 'effector/compat'
import { typicodeApi } from 'shared/api'

export const createAccountFx = createEffect(typicodeApi.auth.createAccount)
createAccountFx.doneData.watch((response) => {
  console.log(response)
})
createAccountFx.use((params) => console.log(params))
