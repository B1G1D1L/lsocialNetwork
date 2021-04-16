import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './MyPost/MyPost'
import { addPostActionCreator, updateNewTextActionCreator } from '../../../Redax/State';

const MyPosts = (props) => {

  const postElement = props.posts.posts.map( post => <MyPost key={post.id} message={post} /> );

  let newPostElement = React.createRef(); 

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.dispatch(updateNewTextActionCreator(text))
  }

  return (
    <div>
      <div className={s.posts}>
        <textarea onChange={onPostChange} ref={newPostElement}
          id="inputPost"
          name="post"
          cols="30"
          rows="4"
          placeholder="Напишите свой пост"
          value={props.posts.newPostText} />

        <input onClick={addPost} className={s.posts__btn} type='button' value='Опубликовать'></input>
      </div>
      
      {postElement}
    </div>
  )
}

export default MyPosts;