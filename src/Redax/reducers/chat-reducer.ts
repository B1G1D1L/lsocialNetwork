import { MessageType } from "../../api/chat-api";
import { BaseThunkType, InferActionsTypes } from "../redax-store";
import { getAuthUserData } from "./auth-reducer";


// State
const initialState = {
  messages: [] as MessageType[]
}


// Reducer
const appReducer = (state = initialState, action: ActionsTypes): initialStateType => { 
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
  messagesReceived: (messages: MessageType[]) => ({type: 'SN/CHAT/MESSAGES_RESEIVED', payload: {messages}} as const)
}


// Thunk creator
export const getMessagesListening = (): ThunkTypes => async (dispatch) => {
 
} // Выполнение всех запросов


export default appReducer;


// Types
type initialStateType = typeof initialState // State
type ActionsTypes = InferActionsTypes<typeof actionsChat> // Actions
type ThunkTypes = BaseThunkType<ActionsTypes> // Thunk
