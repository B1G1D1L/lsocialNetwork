import React from 'react';
import { Field, reduxForm } from 'redux-form';

import s from './../Dialog.module.css';

const Message = (props) => {
  let messageElement = 
    props.dialogPage.messageData
      .map(m => <p key ={props.dialogPage.messageData.indexOf(m)}>{m.message}</p>);

  // let newMessageElement = React.createRef();

  // const onChange = () => {
  //   let text = newMessageElement.current.value;
  //   props.updateNewTextMessage(text);
  // };

  // const onAddNewMessage = () => {
  //   props.addMessage();
  // };
  
  return (
    <div className={s.message}>

      <div className={s.dialog}>
        {messageElement}
      </div>

      <div className={s.messageInput}>
        <LoginReduxForm />
      </div>
    </div>
  );
}


const LoginForm = (props) => {
  return <div>
    <form onSubmit={props.handleSubmit }>
      <Field component='input' type='text' name='message' />
      <button type='submit'>Submit</button>
    </form>
  </div>
}


const LoginReduxForm = reduxForm({
  form: 'message'
})(LoginForm);


export default Message;