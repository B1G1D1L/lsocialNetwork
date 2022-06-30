import { createStore } from 'effector/compat'
import {user} from 'shared/api'

const userInitialState: user = {
  name: '',
  email: '',
  token: ''
}

export const $user = createStore(userInitialState)
