import { createEvent, createStore } from 'effector/compat'
import { IUserData } from 'shared/api'

const initializeUserData: IUserData = {
  email: '',
  name: '',
  id: '',
  online: false,
}

export const resetUserData = createEvent()

export const $user = createStore<IUserData>(initializeUserData)
export const $userId = $user.map((data) => data.id)
export const $userName = $user.map((data) => data.name)
export const $isAuth = $user.map((data) => !!data.id)
export const $loadingAuthentication = createStore(true)

$user.reset(resetUserData)

$user.watch((data) => console.log('main store', data))
