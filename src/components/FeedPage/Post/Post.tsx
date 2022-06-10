import React from 'react'
import cn from 'classnames'

import { ReactComponent as Like } from '@assets/image/like.svg'
import { ReactComponent as LikeNo } from '@assets/image/like-no.svg'
import { ReactComponent as Comment } from '@assets/image/comment.svg'
import { ReactComponent as Share } from '@assets/image/share.svg'
import { ReactComponent as Send } from '@assets/image/send.svg'
import { DotButton, Button, Field } from '@components/app'

import styles from './Post.module.css'

export const Post = () => {
  console.log(process.env.REACT_APP_API)

  const [comment, setComment] = React.useState('')
  const [like, setLike] = React.useState(false)

  // Actions
  const onClickLike = () => {
    setLike(!like)
  }
  
  const onShare = () => {
    console.log('on share')
  }

  const onShowComments = () => {
    console.log('show comment')
  }

  // Comment
  const onSubmitComment = () => {
    console.log(comment)
    setComment('')
  }

  const handleChangeCommit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value)
  }

  return (
    <div className="body__item">
      <div className={styles.header}>
        <div className={styles.header__avatar}>
          <img
            className={cn('avatar', 'avatar_large')}
            src="https://otkritkis.ru/wp-content/uploads/2021/10/ava-180.jpg"
            alt="avatar"
          />
        </div>
        <div className={styles.header__name}>
          <h3>Kiril Pushkin</h3>
          <span>15h. Public</span>
        </div>
        <DotButton />
      </div>

      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero
        quae obcaecati, assumenda similique amet optio voluptas adipisci fugiat
        laborum culpa vero debitis ipsum sapiente rem maiores mollitia, facere
        esse!
      </p>

      <div className={styles.content}>
        <div className={styles.content__picture}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Eagle_Owl_IMG_9203.JPG/1280px-Eagle_Owl_IMG_9203.JPG"
            alt=""
          />
        </div>
      </div>

      <div className={styles.info}>
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

      <div className={styles.actions}>
        <Button
          onClick={onClickLike}
          variant="text"
          startIcon={like ? <Like /> : <LikeNo />}
        >
          Like
        </Button>
        <Button variant="text" startIcon={<Comment />}>
          Comments
        </Button>
        <Button variant="text" startIcon={<Share />}>
          Share
        </Button>
      </div>

      <div className={styles.comment}>
        <img
          className={cn('avatar', 'avatar_small')}
          src="https://otkritkis.ru/wp-content/uploads/2021/10/ava-180.jpg"
          alt="avatar"
        />
        <Field
          onChange={handleChangeCommit}
          placeholder="Wtire a comment..."
          value={comment}
          darkTheme
        />
        <button className={styles.comment__send}>
          <Send />
        </button>
      </div>
    </div>
  )
}
