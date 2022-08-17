import { doc, getDoc } from 'firebase/firestore'
import { db } from 'shared/config'

export const fetchUser = async (id: string) => {
  const userRef = doc(db, 'users', 'Dm7j3oJ73F9NClsVvThz')
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
}
