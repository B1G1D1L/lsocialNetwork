import { createStore } from 'effector/compat'
import { IUserData } from 'shared/api'

export const $user = createStore<IUserData>({ email: '', name: '', token: '' })
export const $userName = $user.map((data) => data.name)
export const $isAuth = $user.map((data) => !!data.token)

$user.watch((state) => console.log(state))
