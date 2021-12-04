import { AppStateType } from "../redax-store";

export const getMessagesSL = (state: AppStateType) => {
  return state.chat.messages
} 
export const getStatusWsSL = (state: AppStateType) => {
  return state.chat.status
}