import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { MessageDataType } from '../../../Redax/reducers/message-reducer';
import { maxLength15 } from '../../../utils/validators/validators';
import { ElementHOC } from '../../hoc/element';

import s from './../Dialog.module.css';


const Message: React.FC<MessageProps> = ({ dialogPage, addMessage }) => {

  // Массив сообщений
  let messageElement = dialogPage.map(m => 
      <p key ={dialogPage.indexOf(m)}>{m.message}</p>
    );

  // Отправка сообщения
  const submit = (value: IMessage) => addMessage(value.message);
  
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

// Form
const LoginForm: React.FC<ReduxForm> = (props) => {
  const { handleSubmit } = props;
  const Textarea = ElementHOC('textarea'); 

  return <div>
    <form onSubmit={handleSubmit}>
      <Field 
        component={Textarea}
        type='text'
        name='message'
        validate={[maxLength15]}  
        placeholder='input new message' 
      />
      <button type='submit'>Submit</button>
    </form>
  </div>
}

const LoginReduxForm = reduxForm<IMessage>({
  form: 'message',
})(LoginForm);


export default Message;


// Types
type MessageProps = {
  dialogPage: Array<MessageDataType>
  addMessage: (newMessage: string) => void
} //Message


type ReduxForm = InjectedFormProps<IMessage> // Redux-form
type IMessage = {
  message: string
} 