import { createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc } from 'firebase/firestore'

import { typicodeApi, SignUp } from 'shared/api'
import { db } from './base'

export const createAccount = async (params: SignUp) => {
  try {
    const userData: any = await createUserWithEmailAndPassword(
      typicodeApi.base.auth,
      params.email,
      params.password
    )
    const userInfoData = await addDoc(collection(db, 'users'), {
      email: params.email,
      name: params.name,
    })

    console.log(userData.user)
    // return {
    //   token: userData.user.accessToken
    // }
  } catch (e) {
    throw e
  }
}
