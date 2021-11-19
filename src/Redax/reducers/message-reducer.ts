import { InferActionsTypes } from "../redax-store";


// State
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


// Reduce
const messageReduce = (state = initialState, action: ActionsType): InitialStateType => { 
  switch(action.type) {
    case 'message/ADD_NEW_MESSAGE': {
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
export const actionsMessage = {
  // Добавить сообщение
  addMessageCreator: (newMessage: string) => {
    debugger
    return { type: 'message/ADD_NEW_MESSAGE', newMessage } as const
  }
}
export default messageReduce;


// Type state
type InitialStateType = typeof initialState // State

export type DialogStateType = {
  id: number
  name: string
} // Контакты

export type MessageDataType = {
  id: number
  message: string
} // Сообщения

type ActionsType = InferActionsTypes<typeof actionsMessage> // Actions
