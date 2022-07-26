import { createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc } from 'firebase/firestore'

import { typicodeApi, ISignUp } from 'shared/api'

export const createAccountApi = async ({ name, email, password }: ISignUp) => {
  try {
    const userDataReg = await createUserWithEmailAndPassword(
      typicodeApi.base.auth,
      email,
      password
    )

    await addDoc(collection(typicodeApi.base.db, 'users'), {
      email,
      name,
    })

    return { token: userDataReg.user.uid }
  } catch (e) {
    throw e
  }
}
