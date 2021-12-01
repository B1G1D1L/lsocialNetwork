import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './MyPost/MyPost'
import SendIcon from '@mui/icons-material/Send';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { ElementHOC } from '../../hoc/element';
import { maxLength5 } from '../../../utils/validators/validators';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../Redax/selectors/profile-selectors';
import { actionsProfile } from './../../../Redax/reducers/profile-reducer'


const MyPosts: React.FC = (props) => {
  const dispatch = useDispatch()
  const posts = useSelector(getPosts)

  const addPost = (post: string) => {
    dispatch(actionsProfile.addPostActionCreator(post))
  }

  const postElement = posts.map(post => 
    <MyPost
      key={posts.indexOf(post)}
      message={post}
    /> 
  );

  const submit = (values: any) => addPost(values.post);

  return (
    <div>
      <LoginReduxForm onSubmit={submit} />
      <section>
        {postElement}
      </section>
    </div>
  )
};



// Form
const LoginForm: React.FC<InjectedFormProps<FormData>> = (props) => {
  const { handleSubmit } = props;
  const Textarea = ElementHOC('textarea');

  return <div>
    <form onSubmit={handleSubmit}>
      <Field
        name='post'
        component={Textarea}
        type='text'
        validate={[ maxLength5 ]} 
      />
      <Button 
        type='submit'
        variant="contained" 
        endIcon={<SendIcon />}
        className={s.button}
      >
        Send
      </Button>
    </form>
  </div>
}

const LoginReduxForm = reduxForm<FormData>({
  form: 'post'
})(LoginForm)


export default React.memo(MyPosts);


// Types

type FormData = {
  post: string
} // Props Form



