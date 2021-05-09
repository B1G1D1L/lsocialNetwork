import React from 'react';
import s from './../Dialog.module.css';

const Message = (props) => {
  let messageElement = 
    props.dialogPage.messageData
      .map(m => <p key ={props.dialogPage.messageData.indexOf(m)}>{m.message}</p>);

  let newMessageElement = React.createRef();

  const onChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewTextMessage(text);
  };

  const onAddNewMessage = () => {
    props.addMessage();
  };
  
  return (
    <div className={s.message}>

      <div className={s.dialog}>
        {messageElement}
      </div>

      <div className={s.messageInput}>
        <textarea
          onChange={onChange}
          ref={newMessageElement}
          value={props.dialogPage.newMessageText}
          placeholder='Введите сообщения'
          cols="50"
          rows="5" />

        <button onClick={onAddNewMessage} type='button'>Отправить</button>

      </div>
    </div>
  );
}

export default Message;