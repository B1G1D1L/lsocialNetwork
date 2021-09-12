import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './MyPost/MyPost'
import { Field, reduxForm } from 'redux-form';


const MyPosts = (props) => {
  const postElement = 
    props.profilePage.posts
      .map( post => <MyPost key={props.profilePage.posts.indexOf(post)} message={post} /> );

  const submit = (values) => props.addPost(values.post);

  return (
    <div>
      <LoginReduxForm onSubmit={submit} />
      {postElement}
    </div>
  )
}


const LoginForm = (props) => {
  const {handleSubmit, pristine, reset, submitting} = props

  return <div>
    <form onSubmit={handleSubmit}>
      <Field
        name='post'
        component='input'
        type='textarea'
      />
      <button type='submit' >Submit</button>
    </form>
  </div>
}


const LoginReduxForm = reduxForm({
  form: 'post'
})(LoginForm)


export default MyPosts;