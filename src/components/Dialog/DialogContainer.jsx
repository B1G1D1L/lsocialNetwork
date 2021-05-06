import React from 'react';
import { addMessageCreator, updateNewTextMessageCreator } from '../../Redax/message-reducer';
import StoreContext from '../../StoreContext';
import Dialog from './Dialog';


const DialogContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {

        let state = store.getState();

        const addMessage = () => {
          store.dispatch(addMessageCreator());
        };

        const updateNewTextMessage = (text) => {
          store.dispatch(updateNewTextMessageCreator(text))
        };

        return (
          <Dialog dialogData={state.messagePage.dialogData}
            messageData={state.messagePage.messageData}
            newMessageText={state.messagePage.newMessageText}
            addMessage={addMessage}
            updateNewTextMessage={updateNewTextMessage} />
        )
      }
      }
    </StoreContext.Consumer>
  )
}

export default DialogContainer;