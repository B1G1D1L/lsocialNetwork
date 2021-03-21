import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './MyPost/MyPost'

const MyPosts = (props) => {

  const postElement = props.posts.map( post => <MyPost message={post.message} /> );

  return (
    <div>
      <div className={s.posts}>
        <img className={s.posts__avatar} src="https://cdn.wallpapersafari.com/90/43/2gzPci.jpg" alt="Avatar" />
        <textarea name="post" id="inputPost" cols="30" rows="4" placeholder="Напишите свой пост"></textarea>
        <input className={s.posts__btn} type='button' value='Опубликовать'></input>
      </div>
      
      {postElement}
    </div>
  )
}

export default MyPosts;