import React from 'react'
import cn from 'classnames'
import { FriendsParty } from '@components/app'

import styles from './UsersPage.module.css'

export const UsersPage = () => {
  return (
    <>
      <div className='container_center--small'>
        <div className={cn(styles.users, 'item')}>
          hello mazafaka
        </div>
      </div>

      <FriendsParty />
    </>
  )
}
