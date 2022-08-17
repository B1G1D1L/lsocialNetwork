import { createStore } from 'effector/compat'
import { IUserData } from 'shared/api'

const initializeUserData: IUserData = {
  email: '',
  name: '',
  id: '',
  online: false,
}

export const $user = createStore<IUserData>(initializeUserData)
export const $userName = $user.map((data) => data.name)
export const $isAuth = $user.map((data) => !!data.id)

$user.watch((state) => console.log(state))
