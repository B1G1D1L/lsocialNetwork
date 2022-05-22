import React from 'react'
import cn from 'classnames'

import { FriendsParty, Button } from '@components/app'

import styles from './UsersPage.module.css'



export const UsersPage = () => {

  const onSelectCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e)
  }

  return (
    <>
      <div className='container_center--small'>
        <div className={styles.users}>
          <div className={cn('item', styles.item, styles.users__header, styles.header)}>
            <Button onClick={onSelectCategory} >hello</Button>
            <Button onClick={onSelectCategory} >ПРИВЕТ</Button>
            <Button onClick={onSelectCategory} >ПРИВЕТ</Button>
          </div>

          <div className={styles.body}>
            <div className={cn('item', styles.item)}>hello2</div>
            <div className={cn('item', styles.item)}>hello2</div>
            <div className={cn('item', styles.item)}>hello2</div>
            <div className={cn('item', styles.item)}>hello2</div>
            <div className={cn('item', styles.item)}>hello2</div>
          </div>
        </div>
      </div>

      <FriendsParty />
    </>
  )
}
