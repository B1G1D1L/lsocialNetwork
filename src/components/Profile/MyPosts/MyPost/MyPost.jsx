import React from 'react';
import s from './MyPost.module.css';

const MyPost = (props) => {
  return (
    <div className={s.post}>
      <img src={props.message.urlAvatar} alt={props.message.name}/>
      <div>
        <h3>{props.message.name}</h3>
        <p>{props.message.message}</p>
      </div>
    </div>
  )
}

export default MyPost;