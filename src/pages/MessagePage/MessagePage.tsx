import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import cn from 'classnames'

import { MessageFriend,  } from '@components/index'
import { FriendsParty } from '@components/app'

import styles from './MessagePage.module.css'


export const MessagePage = () => {
  const params = useParams()

  if (params.userId) {
    return (
      <Outlet />
    )
  }

  return (
    <div className='container__wrapper'>
      <div className={cn(styles.message__friends, 'container__body')}>
        <MessageFriend />
        <MessageFriend />
        <MessageFriend />
        <MessageFriend />
      </div>

      <FriendsParty />
    </div>
  )
}
