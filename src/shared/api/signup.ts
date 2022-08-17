import { createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc } from 'firebase/firestore'

import { ISignUp, IUserData } from 'shared/api'
import { auth, db } from '../config'

export const createAccountApi = async ({
  name,
  email,
  password,
}: ISignUp): Promise<IUserData> => {
  try {
    const userDataReg = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )

    await addDoc(collection(db, 'users', userDataReg.user.uid), {
      id: userDataReg.user.uid,
      email,
      name,
    })

    return { id: userDataReg.user.uid, email, name, online: true }
  } catch (e) {
    throw e
  }
}
