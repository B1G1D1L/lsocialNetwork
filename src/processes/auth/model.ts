import { createEvent, sample } from 'effector/compat'
import { $user } from 'entities/user/model'
import { IUserData } from 'shared/api'
import { sessionLoadFx } from 'shared/api'

// Events
export const pageMounted = createEvent()
const updateUser = createEvent<IUserData>()

export const dataInitialization = () => {
  sessionLoadFx()
}

// sample({
//   clock: sessionLoadFx.doneData,
//   target: $user,
// })
