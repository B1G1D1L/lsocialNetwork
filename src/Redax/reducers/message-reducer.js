const ADD_MESSAGE = 'ADD-NEW-MESSAGE';

let initialState = {
  
  dialogData: [
    { id: 1, name: 'Ilya' },
    { id: 2, name: 'Vasily' },
    { id: 3, name: 'Yura' },
    { id: 4, name: 'Nataly' },
  ],

  messageData : [
    {id: 1, message: 'hello'},
  ],
}

const messageReduce = (state = initialState, action) => { 
  
  switch(action.type) {

    case ADD_MESSAGE: {
      return {
        ...state,
        messageData: [...state.messageData, {id: 7, message: action.newMessage}],
      };
    }

    default: 
      return state;
  }
};

// Action creator
export const addMessageCreator = (newMessage) => ({ type: ADD_MESSAGE, newMessage });

export default messageReduce;
