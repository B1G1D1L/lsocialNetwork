import { createEvent, createStore } from 'effector/compat'
import { user } from 'shared/api'

export const updateUser = createEvent<user>()

export const $user = createStore<user>({ email: '', name: '' })
export const $isAuth = $user.map((user) => !!user.name)

$user.on(updateUser, (_, updates) => updates)
