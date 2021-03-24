import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './MyPost/MyPost'

const MyPosts = (props) => {
  const postElement = props.posts.map( post => <MyPost key={post.id} message={post} /> );

  let newPostElement = React.createRef();

  // let addPost = () => {
  //   props.addPost();
  // };  

  let newPostText = () => {
    let text = newPostElement.current.value;
    props.updateTextPost(text);
  };

  return (
    <div>
      <div className={s.posts}>
        <textarea onChange={newPostText} ref={newPostElement}
                  id="inputPost"
                  name="post"
                  cols="30"
                  rows="4"
                  placeholder="Напишите свой пост"
                  value={props.newPostText} />

        <input onClick={props.addPost} className={s.posts__btn} type='button' value='Опубликовать'></input>
      </div>
      
      {postElement}
    </div>
  )
}

export default MyPosts;