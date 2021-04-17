import React from 'react';
import s from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialog = (props) => {
  return (
    <div className={s.dialogs}>
      <DialogItem dialogData={props.dialogData} />
      <Message messageData={props.messageData}
        dispatch={props.dispatch}
        newMessageText = {props.newMessageText}
        addMessage = {props.addMessage}
        updateNewTextMessage = {props.updateNewTextMessage} />
    </div>
  )
}

export default Dialog;