import React from 'react';
import { addMessageCreator, updateNewTextMessageCreator } from '../../../Redax/State';
import s from './../Dialog.module.css';

const Message = props => {
  let messageElement = props.messageData.map(m => <p key ={m.id}>{m.message}</p>);

  let newMessageElement = React.createRef();

  const updateTextMessage = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewTextMessageCreator(text));
  };

  const addNewMessage = () => props.dispatch(addMessageCreator());
  
  return (
    <div className={s.message}>
      <div className={s.dialog}>
        {messageElement}
      </div>
      <div className={s.messageInput}>
        <textarea
          onChange={updateTextMessage}
          ref={newMessageElement}
          value={props.newMessageText}
          placeholder='Введите сообщения'
          cols="50"
          rows="5" />
        <button onClick={addNewMessage} type='button'>Отправить</button>
      </div>
    </div>
  );
}

export default Message;