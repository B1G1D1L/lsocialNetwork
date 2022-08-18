import { createEffect, createEvent, sample } from 'effector/compat'
import { onAuthStateChanged } from 'firebase/auth'
import { $loadingAuthentication, $user } from 'entities/user/model'
import { userApi, IUserData } from 'shared/api'
import { auth } from 'shared/config'

// Events
export const pageMounted = createEvent()
export const updateUserId = createEvent<string>('')

// Getting my session
const loadSessionFx = createEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user?.uid) {
      updateUserId(user.uid)
    }
  })
})

sample({
  clock: pageMounted,
  target: loadSessionFx,
})

// Getting my data
sample({
  clock: updateUserId,
  target: userApi.fetchUserFx,
})

// Save data user
sample({
  //@ts-ignore
  clock: userApi.fetchUserFx.doneData,
  filter: (data: IUserData | null) => data !== null,
  target: $user,
})

// Process loading
sample({
  clock: userApi.fetchUserFx.pending,
  target: $loadingAuthentication,
})
