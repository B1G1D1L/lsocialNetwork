import { Dispatch } from "redux";
import { chatAPI, MessageType, statusType } from "../../api/chat-api";
import { BaseThunkType, InferActionsTypes } from "../redax-store";


// State
const initialState = {
  messages: [] as MessageType[],
  status: 'panding' as statusType
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

    case 'SN/CHAT/STATUS_CHANGET': {
      return {
        ...state, 
        status: action.payload.status
      }
    }

    default: 
      return state;
  }
};


// actions creator
const actionsChat = {
  messagesReceived: (messages: MessageType[]) => (
    {type: 'SN/CHAT/MESSAGES_RESEIVED', payload: {messages}} as const
  ),
  statusChanget: (status: statusType) => (
    {type: 'SN/CHAT/STATUS_CHANGET', payload: {status}} as const
  )
}


// Обработчик событий сообщений
let _newMessageHandler: ((message: MessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {

  if(_newMessageHandler === null) {
    _newMessageHandler = (messages: MessageType[]) => {
      dispatch(actionsChat.messagesReceived(messages))
    }
  }

  return _newMessageHandler
}

// Обработчик событий статуса
let _newStatusHandler: ((status: statusType) => void) | null = null
const newStatusHandlerCreator = (dispatch: Dispatch) => {
  
  if(_newStatusHandler === null) {
    _newStatusHandler = (status: statusType) => {
      dispatch(actionsChat.statusChanget(status))
    }
  }

  return _newStatusHandler
}
// Thunk creator
export const startMessagesListening = (): ThunkTypes => async (dispatch) => {
  chatAPI.start()
  chatAPI.subscrube('messages-reseived', newMessageHandlerCreator(dispatch))
  chatAPI.subscrube('status-changed', newStatusHandlerCreator(dispatch))
} 

export const stopMessagesListening = (): ThunkTypes => async (dispatch) => {
  chatAPI.stop()
  chatAPI.unsubscrube('messages-reseived', newMessageHandlerCreator(dispatch))
  chatAPI.unsubscrube('status-changed', newStatusHandlerCreator(dispatch))
}
export const sendMessage = (message: string): ThunkTypes => async (dispatch) => {
  chatAPI.sendMessage(message)
}

export default chatReducer;


// Types
type initialStateType = typeof initialState // State
type ActionsTypes = InferActionsTypes<typeof actionsChat> // Actions
type ThunkTypes = BaseThunkType<ActionsTypes> // Thunk

