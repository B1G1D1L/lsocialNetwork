import React from 'react'

import { NewPost } from '@components/index'
import { Post } from '@components/index'
import { FriendsParty } from '@components/app'

import styles from './FeedPage.module.css'

export const FeedPage = () => {
  return (
    <div className='container__wrapper'>
      <div className='container__body'>
        <NewPost />
        <Post />
      </div>
      <FriendsParty />
    </div>
  )
}
