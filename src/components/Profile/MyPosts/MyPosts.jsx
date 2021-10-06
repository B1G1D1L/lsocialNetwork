import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './MyPost/MyPost'
import { Field, reduxForm } from 'redux-form';
import { ElementHOC } from '../../hoc/element';
import { maxLength5 } from '../../../utils/validators/validators';


const MyPosts = (props) => {

  const postElement = 
    props.profilePage.posts.map(post => 
      <MyPost
        key={props.profilePage.posts.indexOf(post)}
        message={post}
      /> 
    );

  const submit = (values) => props.addPost(values.post);

  return (
    <div>
      <LoginReduxForm onSubmit={submit} />
      {postElement}
    </div>
  )
};

function areEqual(prevProps, nextProps) {
  return prevProps !== nextProps;
}

const LoginForm = (props) => {
  const {handleSubmit} = props;
  const Textarea = ElementHOC('textarea');

  return <div>
    <form onSubmit={handleSubmit}>
      <Field
        name='post'
        component={Textarea}
        type='text'
        validate={[ maxLength5 ]} 
      />
      <button className={s.style} type='submit' >Submit</button>
    </form>
  </div>
}


const LoginReduxForm = reduxForm({
  form: 'post'
})(LoginForm)


export default React.memo(MyPosts, areEqual);