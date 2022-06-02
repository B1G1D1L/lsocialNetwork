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
    <div className='container__wrapper'>
      <div className={cn(styles.users__wrapper, 'container__body')}>
        <Categories category={category} onSelectCategory={onSelectCategory} />
        <div className={cn(styles.users__body, styles.body)}>
          <FollowUser />
          <FollowUser />
          <FollowUser />
          <FollowUser />
          <FollowUser />
          <FollowUser />
          <FollowUser />
        </div>
      </div>

      <FriendsParty />
    </div>
  )
}