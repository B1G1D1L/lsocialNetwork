import { authApi } from 'shared/api'
import { sample } from 'effector/compat'
import { resetUserData } from 'entities/user/model'
import { createEvent } from 'effector/compat'

export const onClickedSignOut = createEvent()

sample({
  clock: onClickedSignOut,
  target: authApi.signOutFx,
})

sample({
  clock: authApi.signOutFx.finally,
  filter: (data) => data.status === 'done',
  target: resetUserData,
})
