import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './MyPost/MyPost'
// import { Field, reduxForm} from 'redux-form';


const MyPosts = (props) => {
  const postElement = 
    props.profilePage.posts
      .map( post => <MyPost key={props.profilePage.posts.indexOf(post)} message={post} /> );

  let newPostElement = React.createRef(); 

  const onAddPost = () => {
    props.addPost();
  };

  // const onPostChange = () => {
  //   const text = newPostElement.current.value;
  //   props.unpadeNewPostText(text);
  // }

  return (
    <div>
      <form className={s.posts}>
        {/* <Field onChange={onPostChange} ref={newPostElement}
          id="inputPost"
          name="post"
          cols="30"
          rows="4"
          placeholder="Напишите свой пост"
          value={props.profilePage.newPostText}
          component='textarea' /> */}

        <input onClick={onAddPost} className={s.posts__btn} type='button' value='Опубликовать'></input>
      </form>
      
      {postElement}
    </div>
  )
}


export default MyPosts;