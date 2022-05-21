import React from 'react';
import cn from 'classnames';

import { ReactComponent as Like } from '@assets/image/like.svg';
import { ReactComponent as LikeNo } from '@assets/image/like-no.svg';
import { ReactComponent as Comment } from '@assets/image/comment.svg';
import { ReactComponent as Share } from '@assets/image/share.svg';
import { ReactComponent as Send } from '@assets/image/send.svg';
import { DotButton, Button } from '@components/app';
import { FieldPost } from '../FieldPost/FieldPost';


import styles from './Post.module.css'


export const Post = () => {

  const [comment, setComment] = React.useState<string>('')
  const [like, setLike] = React.useState(false)

  const onSubmitComment = () => {
    console.log(comment)
    setComment('')
  }

  const onShowComments = () => {
    console.log('show comment')
  }

  const onShare = () => {
    console.log('on share')
  }

  return (
    <div className='item'>

      <div className={cn(styles.post__header, styles.header)}>
        <div className={styles.header__avatar}>
          <img
            className={cn('avatar', 'avatar_large')}
            src="https://otkritkis.ru/wp-content/uploads/2021/10/ava-180.jpg" 
            alt="avatar" 
          />
        </div>
        <div className={styles.header__name}>
          <strong>Kiril Pushkin</strong>
          <span>15h. Public</span>
        </div>
        <DotButton />
      </div>

      <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero quae obcaecati, assumenda similique amet optio voluptas adipisci fugiat laborum culpa vero debitis ipsum sapiente rem maiores mollitia, facere esse!</p>

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
        <Button onClick={() => setLike(!like)} transparent>
          <div className={cn(styles.actions__like, styles.actions__item)}>
            {like ? <Like /> : <LikeNo />}
            <span>Like</span>
          </div>
        </Button>
        <Button onClick={onShowComments} transparent>
          <div className={cn(styles.actions__comments, styles.actions__item)}>
            <Comment />
            <span>Comments</span>
          </div>
        </Button>
        <Button onClick={onShare} transparent>
          <div className={cn(styles.actions__share, styles.actions__item)}>
            <Share />
            <span>Share</span>
          </div>
        </Button>
      </div>

      <div className={cn(styles.post__comment, styles.comment)}>
        <img 
          className={cn('avatar', 'avatar_small')} 
          src="https://otkritkis.ru/wp-content/uploads/2021/10/ava-180.jpg" 
          alt="avatar" 
        />
        <FieldPost onChange={setComment} placeholder='Wtire a comment...' value={comment} />
        <button className={styles.comment__send} onClick={onSubmitComment}>
          <Send />
        </button>
      </div>

    </div>
  )
}





