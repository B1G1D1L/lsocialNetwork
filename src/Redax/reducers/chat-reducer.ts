import { chatAPI, MessageType } from "../../api/chat-api";
import { BaseThunkType, DispatchType, InferActionsTypes } from "../redax-store";


// State
const initialState = {
  messages: [] as MessageType[]
}


// Reducer
const chatReducer = (state = initialState, action: ActionsTypes): initialStateType => { 
  switch(action.type) {

    case 'SN/CHAT/MESSAGES_RESEIVED': {
      return {
        ...state, 
        messages: [...state.messages, ...action.payload.messages],
      }
    }

    default: 
      return state;
  }
};


// actions creator
const actionsChat = {
  messagesReceived: (messages: MessageType[]) => {
    return {type: 'SN/CHAT/MESSAGES_RESEIVED', payload: {messages}} as const
  }
}


// Thunk creator
let _newMessagesHandler: ((messages: MessageType[]) => void) | null = null

const newMessageHandlerCreator = (dispatch: DispatchType) => {
  if(_newMessagesHandler === null) {
    _newMessagesHandler = (messages) => {
      dispatch(actionsChat.messagesReceived(messages))
    }
  }

  return _newMessagesHandler
} 

// Подписаться
export const startMessagesListening = (): ThunkTypes => async (dispatch) => {
  chatAPI.start()
  chatAPI.subscribe(newMessageHandlerCreator(dispatch))
} 

// Отписаться 
export const stopMessagesListening = (): ThunkTypes => async (dispatch) => {
  chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
} 

// Отправить сообщение
export const sendMessage = (message: string): ThunkTypes => async (dispatch) => {
  chatAPI.sendMessage(message)
}

export default chatReducer;


// Types
type initialStateType = typeof initialState // State
type ActionsTypes = InferActionsTypes<typeof actionsChat> // Actions
type ThunkTypes = BaseThunkType<ActionsTypes> // Thunk
