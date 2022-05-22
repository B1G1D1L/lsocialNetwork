import React from 'react'
import cn from 'classnames'

import { ReactComponent as World } from '@assets/image/network/world.svg'
import { ReactComponent as Facebook } from '@assets/image/network/facebook.svg'
import { ReactComponent as Twitter } from '@assets/image/network/twitter.svg'
import { ReactComponent as Instagram } from '@assets/image/network/instagram.svg'

import styles from './FollowUser.module.css'
import { Button } from '@components/app'

export const FollowUser = () => {
  return (
    <div className={cn('item', styles.follow)}>

      <div className={cn(styles.follow__header, styles.header)}>
        <img 
          className={cn('avatar', 'avatar_big')}
          src="https://otkritkis.ru/wp-content/uploads/2021/10/ava-180.jpg" 
          alt="avatar" 
        />
        <div className={styles.header__content}>
          <h3 className={styles.header__title}>Алексей нигерский</h3>
          <span className={styles.header__subtitle}>Video Editor</span>
          <div className={styles.header__network}>
            <a href="https://www.google.com/" target='_blank'><World /></a>
            <a href="https://www.google.com/" target='_blank'><Facebook /></a>
            <a href="https://www.google.com/" target='_blank'><Twitter /></a>
            <a href="https://www.google.com/" target='_blank'><Instagram /></a>
          </div>
        </div>
      </div>

      <div className={cn(styles.follow__bottom, styles.bottom)}>
        <Button variant='outlined'>Ignore</Button>
        <Button variant='contained'>Follow</Button>
      </div>

    </div>
  )
}
