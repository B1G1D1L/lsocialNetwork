import { createEffect } from 'effector/compat'
import { doc, getDoc } from 'firebase/firestore'
import { db } from 'shared/config'

export const fetchUserFx = createEffect(async (id: string) => {
  const userRef = doc(db, 'users', id)
  const docSnap = await getDoc(userRef)

  if (docSnap.exists()) {
    const userData = docSnap.data()
    return {
      id,
      email: userData.email,
      name: userData.name,
      online: userData.online,
    }
  }

  return null
})
