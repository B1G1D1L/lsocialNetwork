import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../../utils/validators/validators';

import s from './../Dialog.module.css';

const Message = (props) => {
  let messageElement = 
    props.dialogPage.messageData
      .map(m => <p key ={props.dialogPage.messageData.indexOf(m)}>{m.message}</p>);

  const submit = (value) => props.addMessage(value.message);
  
  return (
    <div className={s.message}>
      <div className={s.dialog}>
        {messageElement}
      </div>
      <div className={s.messageInput}>
        <LoginReduxForm onSubmit={submit} />
      </div>
    </div>
  );
}


const LoginForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return <div>
    <form onSubmit={handleSubmit}>
      <Field 
        component='input'
        type='text'
        name='message'
        validate={[maxLength(10)]}
      />

      <button type='submit' >Submit</button>
    </form>
  </div>
}


const LoginReduxForm = reduxForm({
  form: 'message',
})(LoginForm);


export default Message;