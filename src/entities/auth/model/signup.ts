import { createStore, createEffect } from 'effector/compat'
import { typicodeApi } from 'shared/api'

export const createAccountFx = createEffect(
  typicodeApi.auth.createAccount
)

createAccountFx.doneData.watch((response) => {
  console.log(response)
})

const $createIsLoading = createAccountFx.pending


