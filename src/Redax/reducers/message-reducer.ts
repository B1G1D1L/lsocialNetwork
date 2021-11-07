const ADD_MESSAGE = 'ADD-NEW-MESSAGE';

type DialogStateType = {
  id: Number
  name: String
}
type MessageDataType = {
  id: number
  message: string
}

let initialState = {
  dialogData: [
    { id: 1, name: 'Ilya' },
    { id: 2, name: 'Vasily' },
    { id: 3, name: 'Yura' },
    { id: 4, name: 'Nataly' },
  ] as Array<DialogStateType>,
  messageData : [
    {id: 1, message: 'hello'},
  ] as Array<MessageDataType>,
}

type InitialStateType = typeof initialState
type ActionsType = AddMessageCreatorActionType

// Reduce
const messageReduce = (state = initialState, action: ActionsType): InitialStateType => { 
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
type AddMessageCreatorActionType = {
  type: typeof ADD_MESSAGE
  newMessage: string
}
export const addMessageCreator = (newMessage: string): AddMessageCreatorActionType => ({ type: ADD_MESSAGE, newMessage });

export default messageReduce;
