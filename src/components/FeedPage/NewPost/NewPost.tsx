import React, { FormEvent } from 'react'
import cn from 'classnames'

import { ReactComponent as Photo } from '@assets/image/photo.svg'
import { Button, Field } from '@components/app'

import styles from './NewPost.module.css'
import stylesPost from './../Post/Post.module.css'

export const NewPost = () => {
  const [value, setValue] = React.useState('')

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onSubmitNewPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setValue('')
  }

  return (
    <div className={cn(stylesPost.post, 'body__item')}>
      <form onSubmit={onSubmitNewPost}>
        <div className={styles.field__input}>
          <img
            className={cn('avatar', 'avatar_small')}
            src="https://otkritkis.ru/wp-content/uploads/2021/10/ava-180.jpg"
            alt="ava"
          />
          <Field
            value={value}
            onChange={handleChangeText}
            placeholder="What's happening?"
            darkTheme
          />
        </div>

        <div className={styles.field__send}>
          <label htmlFor="newPostFile">
            <Photo />
            Photo
          </label>
          <input type="file" id="newPostFile" />
          <Button type="submit">Post</Button>
        </div>
      </form>
    </div>
  )
}
