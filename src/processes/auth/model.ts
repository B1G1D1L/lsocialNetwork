import { createEffect, createEvent, sample } from 'effector/compat'
import { $loadingProfileData, $user } from 'entities/user/model'
import { onAuthStateChanged } from 'firebase/auth'
import { fetchUser, IUserData } from 'shared/api'
import { auth } from 'shared/config'

// Events
export const updateUserId = createEvent<string>('')
const getUserFx = createEffect(fetchUser)
const loadProfile = getUserFx.pending

export const dataInitialization = () => {
  onAuthStateChanged(auth, (user) => {
    if (user?.uid) {
      updateUserId(user.uid)
    }
  })
}

sample({
  clock: updateUserId,
  target: getUserFx,
})

// Save data user
sample({
  //@ts-ignore
  clock: getUserFx.doneData,
  filter: (data: IUserData | null) => !!data,
  target: $user,
})

// Process loading
sample({
  clock: loadProfile,
  target: $loadingProfileData,
})
