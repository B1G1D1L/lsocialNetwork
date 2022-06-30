import { createStore, createEvent } from 'effector/compat'
import type { user } from 'shared/api'

export const initialUserStore: user = {
  email: '',
  name: '',
  token: '',
}

export const updateUser = createEvent<user>()

// Store
export const $user = createStore(initialUserStore)
