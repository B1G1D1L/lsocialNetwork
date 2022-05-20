import React from 'react';
import cn from 'classnames';

import { ReactComponent as Like } from './../../../assets/image/like.svg';
import { ReactComponent as LikeNo } from './../../../assets/image/like-no.svg';
import { ReactComponent as Comment } from './../../../assets/image/comment.svg';
import { ReactComponent as Share } from './../../../assets/image/share.svg';
import { DotButton, Button } from '../../app';


import styles from './Post.module.css'


export const Post = () => {
  return (
    <div className={styles.post}>

      <div className={cn(styles.post__header, styles.header)}>
        <div className={styles.header__avatar}>
          <img src="https://otkritkis.ru/wp-content/uploads/2021/10/ava-180.jpg" alt="avatar" />
        </div>
        <div className={styles.header__name}>
          <strong>Kiril Pushkin</strong>
          <span>15h. Public</span>
        </div>
        <DotButton />
      </div>

      <div className={cn(styles.post__content, styles.content)}>
        <div className={styles.content__picture}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Eagle_Owl_IMG_9203.JPG/1280px-Eagle_Owl_IMG_9203.JPG" alt="" />
        </div>
      </div>

      <div className={cn(styles.post__info, styles.info)}>
        <div className={styles.info__people_likes}>
          <img 
            className={styles.info__people_item}
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8&w=1000&q=80" 
            alt="" 
          />
          <div className={styles.info__people_item}>
            <span>+9</span>
          </div>  
        </div>
        <div className={styles.info__reaction}>
          <span>3 Comments</span>
          <span>17 Share</span>
        </div>
      </div>

      <div className={cn(styles.post__actions, styles.actions)}>
        <Button transparent>
          <div className={cn(styles.actions__like, styles.actions__item)}>
            <LikeNo />
            <span>Like</span>
          </div>
        </Button>
        <Button transparent>
          <div className={cn(styles.actions__comments, styles.actions__item)}>
            <Comment />
            <span>Comments</span>
          </div>
        </Button>
        <Button transparent>
          <div className={cn(styles.actions__share, styles.actions__item)}>
            <Share />
            <span>Share</span>
          </div>
        </Button>
      </div>

    </div>
  )
}





