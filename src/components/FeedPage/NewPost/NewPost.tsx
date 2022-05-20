import React, { FormEvent } from 'react'
import cn from 'classnames';

import { ReactComponent as Photo } from './../../../assets/image/photo.svg';
import { FieldPost } from '../FieldPost/FieldPost';
import { Button } from '../../app';

import styles from './NewPost.module.css';
import stylesPost from './../Post/Post.module.css';



export const NewPost = () => {
  const [value, setValue] = React.useState('')

  const onSubmitNewPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(value)
    setValue('')
  }

  return (
    <div className={stylesPost.post}>
      <div className={styles.field}>

        <form onSubmit={onSubmitNewPost}>
          <div className={styles.field__input}>
            <img 
              className={cn('avatar', 'avatar_small')}
              src="https://otkritkis.ru/wp-content/uploads/2021/10/ava-180.jpg" 
              alt="ava"
            />
            <FieldPost 
              value={value}
              onChange={setValue} 
              placeholder="What's happening?"
            />
          </div>

          <div className={styles.field__send}>
            <label htmlFor="newPostFile">
              <Photo />Photo
            </label>
            <input type="file" id='newPostFile' />
            <Button type='submit'>Post</Button>
          </div>
        </form>
        
      </div>
    </div>
  )
}
