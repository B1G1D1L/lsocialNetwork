import React from 'react';
import { addMessageCreator, updateNewTextMessageCreator } from '../../Redax/message-reducer';
import Dialog from './Dialog';


const DialogContainer = (props) => {
  let state = props.store.getState();

  const addMessage = () => {
    props.store.dispatch(addMessageCreator());
  };

  const updateNewTextMessage = (text) => {
    props.store.dispatch(updateNewTextMessageCreator(text))
  };

  return <Dialog dialogData = {state.messagePage.dialogData}
    messageData = {state.messagePage.messageData}
    newMessageText = {state.messagePage.newMessageText}
    addMessage = {addMessage}
    updateNewTextMessage = {updateNewTextMessage} />
}

export default DialogContainer;