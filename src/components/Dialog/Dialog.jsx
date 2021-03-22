import React from 'react';
import s from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialog = (props) => {
  
  let dialogElement = props.dialogData.dialogData
      .map( d =>  <DialogItem key={d.id} id={d.id} name={d.name} />);
      
  let messageElement = props.dialogData.messageData.map( m => <Message key={m.id} message={m.message} /> )
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialog__list}>
        {dialogElement}
      </div>

      <div>
        {messageElement}
      </div>
    </div>
  )
}

export default Dialog;