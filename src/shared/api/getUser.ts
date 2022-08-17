import { IUserData } from 'shared/api';
import { createEffect } from 'effector/compat'
import { doc, DocumentData, getDoc } from 'firebase/firestore'
import { db } from 'shared/config'

export const getUserFx = createEffect<string, IUserData | any>(async (id: string) => {
  const userRef = doc(db, 'users', 'Dm7j3oJ73F9NClsVvThz')
  const docSnap = await getDoc(userRef)

  if(docSnap.exists()) {
    return  {id, ...docSnap.data()}
  }

  return null
})
