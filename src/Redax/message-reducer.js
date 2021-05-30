const ADD_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  
  dialogData: [
    { id: 1, name: 'Ilya' },
    { id: 2, name: 'Vasily' },
    { id: 3, name: 'Yura' },
    { id: 4, name: 'Nataly' },
  ],

  messageData : [
    {id: 1, message: 'Hello world'},
    {id: 2, message: 'Жопа полная'},
  ],

  newMessageText: '',
}

const messageReduce = (state = initialState, action) => { 
  
  switch(action.type) {

    case ADD_MESSAGE: {
      return {
        ...state,
        messageData: [...state.messageData, {id: 7, message: state.newMessageText}],
        newMessageText: ''
      };
    }

    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.text
      }; 
    }

    default: 
      return state;
  }
};

export const addMessageCreator = () => ({ type: ADD_MESSAGE });
export const updateNewTextMessageCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text });

export default messageReduce;
