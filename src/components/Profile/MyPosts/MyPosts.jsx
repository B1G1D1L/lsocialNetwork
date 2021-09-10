import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './MyPost/MyPost'
import { Field, reduxForm } from 'redux-form';
// import { Field, reduxForm} from 'redux-form';


const MyPosts = (props) => {
  const postElement = 
    props.profilePage.posts
      .map( post => <MyPost key={props.profilePage.posts.indexOf(post)} message={post} /> );

  const onAddPost = () => {
    props.addPost();
  };


  return (
    <div>
      <LoginReduxForm />
      {postElement}
    </div>
  )
}


const LoginForm = (props) => {
  return <div>
    <form onSubmit={props.handleSubmit}>
      <Field name='post' component='input' type='textarea' />
      <button type='submit' >Submit</button>
    </form>
  </div>
}


const LoginReduxForm = reduxForm({
  form: 'post'
})(LoginForm)


export default MyPosts;