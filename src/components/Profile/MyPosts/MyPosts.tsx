import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './MyPost/MyPost'
import SendIcon from '@mui/icons-material/Send';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { ElementHOC } from '../../hoc/element';
import { maxLength5 } from '../../../utils/validators/validators';
import { Button } from '@mui/material';
import { PostsType } from '../../../types/types';


const MyPosts: React.FC<MyPostsProps> = (props) => {
  const postElement = props.posts.map(post => 
    <MyPost
      key={props.posts.indexOf(post)}
      message={post}
    /> 
  );

  const submit = (values: any) => props.addPost(values.post);

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


// For Memo
function areEqual(prevProps: MyPostsProps, nextProps: MyPostsProps) {
  return prevProps !== nextProps;
}

export default React.memo(MyPosts, areEqual);


// Types
type MyPostsProps = {
  posts: Array<PostsType>
  addPost: (newPost: string) => void
} // Props MyPosts

type FormData = {
  post: string
} // Props Form



