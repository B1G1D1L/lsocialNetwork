import React from 'react'
import cn from 'classnames'

import { MessageFriend } from '@components/index'
import { Chat } from '@components/index'

import styles from './MessagePage.module.css'
import { FriendsParty } from '@components/app'
import { Outlet, useParams } from 'react-router-dom'



export const MessagePage = () => {
  const params = useParams()

  if(params.userId) {
    return (
      <Outlet />
    )
  }

  return (
    <>
      <div className={cn('container_center--small', styles.message)}>

        <div className={cn(styles.message__friends, 'item')}>
          <MessageFriend />
          <MessageFriend />
          <MessageFriend />
          <MessageFriend />
        </div>
      </div>

      <FriendsParty />
    </>
  )
}
