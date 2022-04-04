import React from 'react'
import { useParams } from 'react-router-dom'

export const ProfilePage = () => {
  const userId = useParams().userId

  console.log(userId)

  return (
    <div>ProfilePage</div>
  )
}
