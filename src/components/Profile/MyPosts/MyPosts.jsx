import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './MyPost/MyPost'

const MyPosts = (props) => {
  const postElement = 
    props.posts.map( post => <MyPost key={props.posts.indexOf(post)} message={post} /> );

  let newPostElement = React.createRef(); 

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.unpadeNewPostText(text);
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
          value={props.newPostText} />

        <input onClick={onAddPost} className={s.posts__btn} type='button' value='Опубликовать'></input>
      </div>
      
      {postElement}
    </div>
  )
}

export default MyPosts;