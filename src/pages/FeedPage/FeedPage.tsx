import React from 'react'

import { NewPost } from '@components/index'
import { Post } from '@components/index'
import { FriendsParty } from '@components/app'

import styles from './FeedPage.module.css'


export const FeedPage = () => {
  return (
    <div className='d-flex'>
      <div className={styles.container_center}>
        <NewPost />
        <Post />
      </div>
      <FriendsParty />
    </div>
  )
}
