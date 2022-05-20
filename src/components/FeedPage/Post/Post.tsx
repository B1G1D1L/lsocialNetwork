import React from 'react';
import { DotButton } from '../../app';

import styles from './Post.module.css'


export const Post = () => {
  return (
    <div className={styles.post}>

      <div className={styles.post__header}>
        <div className={styles.post__avatar}>
          <img src="https://otkritkis.ru/wp-content/uploads/2021/10/ava-180.jpg" alt="avatar" />
        </div>
        <div className={styles.post__name}>
          <strong>Kiril Pushkin</strong>
          <span>15h. Public</span>
        </div>
        <DotButton />
      </div>

    </div>
  )
}
