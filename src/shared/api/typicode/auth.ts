import { createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc, doc, onSnapshot } from 'firebase/firestore'

import { typicodeApi, SignUp } from 'shared/api'
import { db } from './base'

interface CreateAccountParams extends SignUp {
  updateUser: any
}

export const createAccountApi = async (params: any, updateUser: any) => {
  try {
    await createUserWithEmailAndPassword(
      typicodeApi.base.auth,
      params.email,
      params.password
    )

    const addUserInfo = await addDoc(collection(db, 'users'), {
      email: params.email,
      name: params.name,
    })

    onSnapshot(doc(db, 'users'), { includeMetadataChanges: true }, (doc) => {
      console.log(doc)
    })

    console.log(addUserInfo)
  } catch (e) {
    console.log(e)
  }
}
