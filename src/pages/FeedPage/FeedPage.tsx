import React from 'react'

import { NewPost } from '@components/index'
import { Post } from '@components/index'
import { FriendsParty } from '@components/app'


export const FeedPage = () => {
  return (
    <>
      <div className='container_center--small'>
        <NewPost />
        <Post />
      </div>
      <FriendsParty />
    </>
  )
}
