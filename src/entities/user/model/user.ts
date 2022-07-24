import { combine, createEvent, createStore } from 'effector/compat'
import { IUser } from 'shared/api'

type IToken = Omit<IUser, 'email' | 'name'>
type IUserData = Omit<IUser, 'token'>

const updateUserToken = createEvent<IToken>()
const updateUserData = createEvent<IUserData>()

export const $token = createStore('')
export const $userData = createStore<IUserData>({ email: '', name: '' })
export const $isAuth = $token.map((token) => !!token)

$token.on(updateUserToken, (_, payload) => payload.token)
$userData.on(updateUserData, (_, payload) => payload)

export const $user = combine($token, $userData)
export const events = { updateUserToken, updateUserData }
