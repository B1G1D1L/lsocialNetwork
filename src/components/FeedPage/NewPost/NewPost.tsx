import React from 'react'

import { Field } from '../../app';
import { ReactComponent as Photo } from './../../../assets/image/photo.svg';

import styles from './NewPost.module.css';
import stylesPost from './../Post/Post.module.css';



export const NewPost = () => {
  const onChangeText = (val: string) => {
    console.log(val)
  }

  const onSubmit = (val: string) => {
    console.log(val)
  }

  return (
    <div className={stylesPost.post}>
      <div className={styles.field}>
        <form >
          <div className={styles.field__input}>
            <img src="https://otkritkis.ru/wp-content/uploads/2021/10/ava-180.jpg" alt="ava" />
            <Field 
              onChange={onChangeText}
              placeholder="What's happening?"
              classNames={[`${stylesPost.field__post}`]}
            />
          </div>

          <div className={styles.field__send}>
            <label htmlFor="newPostFile">
              <Photo />Photo
            </label>
            <input type="file" id='newPostFile' />

            <button type='submit'>Post</button>
          </div>
        </form>
      </div>
    </div>
  )
}
