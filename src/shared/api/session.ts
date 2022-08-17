import { createEffect, createEvent, sample } from "effector/compat"
import { $user } from "entities/user/model"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "shared/config"

const upadateUserId = createEvent<string>()

sample({
  clock: upadateUserId,
  target: $user
})

export const sessionLoadFx = createEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if(user?.uid) {
      upadateUserId(user.uid)
    }
  })
})