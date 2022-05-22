import React from 'react'
import cn from 'classnames'

import { FriendsParty } from '@components/app'

import styles from './UsersPage.module.css'
import { Categories, FollowUser } from '@components/index'



export const UsersPage = () => {
  const [category, setCategory] = React.useState('Followers')

  // Выбор категории
  const onSelectCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCategory(e.currentTarget.innerHTML)
  }

  return (
    <>
      <div className='container_center--small'>
        <div className={styles.users}>

          <Categories category={category} onSelectCategory={onSelectCategory} />

          <div className={cn(styles.users__body, styles.body)}>
            <FollowUser />
          </div>
        </div>
      </div>

      <FriendsParty />
    </>
  )
}