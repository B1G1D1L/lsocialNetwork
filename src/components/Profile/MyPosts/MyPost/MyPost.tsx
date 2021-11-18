import React from 'react';
import { PostsType } from '../../../../types/types';
import s from './MyPost.module.css';

const MyPost: React.FC<PropsType> = (props) => {
  return (
    <article className={s.post}>
      <img src={props.message.urlAvatar} alt={props.message.name}/>
      <div>
        <h3>{props.message.name}</h3>
        <p>{props.message.message}</p>
      </div>
    </article>
  )
}

export default MyPost;

// Types
type PropsType = {
  message: PostsType
}