import { createEffect } from 'effector/compat'
import { FirebaseError } from 'firebase/app'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import { auth, db } from 'shared/config'
import type { ISignUp } from 'shared/api'

// Create new accound
export const createAccountFx = createEffect<
  ISignUp,
  { id: string },
  FirebaseError
>(async ({ name, email, password }) => {
  const userDataReg = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
  await setDoc(doc(db, 'users', userDataReg.user.uid), {
    id: userDataReg.user.uid,
    email,
    name,
    online: true,
  })
  return { id: userDataReg.user.uid }
})

// Sign out
export const signOutFx = createEffect(async () => {
  return await signOut(auth)
})
