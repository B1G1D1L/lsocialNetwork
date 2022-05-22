import React from 'react'
import cn from 'classnames'

import styles from './MessageFriend.module.css'

export const MessageFriend = () => {
  return (
    <div className={styles.friend}>
      <img 
        className={cn('avatar', 'avatar_small')}
        src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="avatar" 
      />

      <div className={styles.friend__body}>
        <h3>Анастасия волкова</h3>
        <p>привет.</p>
      </div>

      <div className={styles.friend__info}>
        <span>12:40</span>
        <i>2</i>
      </div>
    </div>
  )
}
