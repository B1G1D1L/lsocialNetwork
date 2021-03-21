import React from 'react';
import s from './MyPost.module.css';

const MyPost = (props) => {
  return (
    <div className={s.name}>{props.message}</div>
  )
}

export default MyPost;