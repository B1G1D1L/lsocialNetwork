const ADD_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messageReduce = (state, action) => { 
  
  switch(action.type) {
    case ADD_MESSAGE:
      let message = {id: 7, message: state.newMessageText};
      state.messageData.push(message);
      state.newMessageText = '';

    case UPDATE_NEW_MESSAGE_TEXT: 
      state.newMessageText = action.text;

    default: 
      return state;
  }
   
  
};

export default messageReduce;
