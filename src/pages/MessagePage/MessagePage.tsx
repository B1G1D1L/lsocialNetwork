import React from 'react'
import cn from 'classnames'

import { MessageFriend } from '@components/index'
import { MessageChat } from '@components/index'

import styles from './MessagePage.module.css'



export const MessagePage = () => {
  return (
    <div className={cn('container_center--small', styles.message)}>
      
      <div className={cn(styles.message__chat, 'item')}>
        <MessageChat />
      </div>

      <div className={cn(styles.message__friends, 'item')}>
        <MessageFriend />
        <MessageFriend />
        <MessageFriend />
        <MessageFriend />
      </div>
      
    </div>
  )
}
