import React from 'react';
import { DialogStateType, MessageDataType } from '../../Redax/reducers/message-reducer';
import s from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialog: React.FC<DialogProps> = (props) => {

  return (
    <div className={s.dialogs}>
      <DialogItem dialogData={props.dialogData} />
      <Message  
        dialogPage={props.messageData}
        addMessage = {props.addMessage} 
      />
    </div>
  )
}

export default Dialog;


// Types
type DialogProps = {
  dialogData: Array<DialogStateType>
  messageData: Array<MessageDataType>
  
  addMessage: (newMessage: string) => void
}