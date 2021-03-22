import React from 'react';
import s from './../Dialog.module.css';

const Message = props => {
  let messageElement = props.messageData.map(m => <p key ={m.id}>{m.message}</p>);

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text)
  }
  
  return (
    <div className={s.message}>
      <div className={s.dialog}>
        {messageElement}
      </div>
      <div className={s.messageInput}>
        <textarea ref={newMessageElement} placeholder='Введите сообщения' cols="50" rows="5"></textarea>
        <button onClick={addMessage} type='button'>Отправить</button>
      </div>
    </div>
  );
}

export default Message;