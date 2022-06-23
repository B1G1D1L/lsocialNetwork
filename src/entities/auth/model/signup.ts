import { createStore, createEffect } from 'effector/compat'
import { typicodeApi } from 'shared/api'

export const CreateAccountFx = createEffect(
  typicodeApi.auth.createAccount
)

CreateAccountFx.done.watch((response) => {
  console.log(response)
})


