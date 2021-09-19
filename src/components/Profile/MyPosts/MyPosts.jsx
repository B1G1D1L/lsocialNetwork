import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './MyPost/MyPost'
import { Field, reduxForm } from 'redux-form';
import { Element } from '../../hoc/element';
import { maxLength5 } from '../../../utils/validators/validators';


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


const Textarea = Element('textarea');

const LoginForm = (props) => {
  const {handleSubmit, pristine, reset, submitting} = props

  return <div>
    <form onSubmit={handleSubmit}>
      <Field
        name='post'
        component={Textarea}
        type='text'
        validate={[ maxLength5 ]} 
      />
      <button type='submit' >Submit</button>
    </form>
  </div>
}


const LoginReduxForm = reduxForm({
  form: 'post'
})(LoginForm)


export default MyPosts;