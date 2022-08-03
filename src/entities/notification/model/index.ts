import { createStore } from 'effector/compat'
import type { INotifications } from 'shared/api'

export const $notification = createStore<INotifications>({ messages: 22 })
