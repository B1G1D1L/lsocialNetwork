import React from 'react'

import { ReactComponent as Photo } from './../../../assets/image/photo.svg';
import { FieldPost } from '../FieldPost/FieldPost';
import { Button } from '../../app';

import styles from './NewPost.module.css';
import stylesPost from './../Post/Post.module.css';



export const NewPost = () => {
  const onChangeNewPost = (val: string) => {
    console.log(val)
  }

  const onSubmit = (val: string) => {
    console.log(val)
  }

  return (
    <div className={stylesPost.post}>
      <div className={styles.field}>

        <form>
          <div className={styles.field__input}>
            <img src="https://otkritkis.ru/wp-content/uploads/2021/10/ava-180.jpg" alt="ava" />
            <FieldPost 
              onChange={onChangeNewPost} 
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
