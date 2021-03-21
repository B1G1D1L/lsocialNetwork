import React from 'react';
import s from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialog = (props) => {
  
  let dialogElement = props.dialogData.map( d =>  <DialogItem id={d.id} name={d.name} />)
  let messageElement = props.messageData.map( m => <Message message={m.message} /> )
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialog__list}>
        {dialogElement}
        {props.lol}
      </div>

      <div>
        {messageElement}
      </div>
    </div>
  )
}

export default Dialog;