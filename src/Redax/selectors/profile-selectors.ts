import { AppStateType } from "../redax-store";

export const getProfile = (state: AppStateType) => {
  return state.profilePage.profile
}
export const getStatus = (state: AppStateType) => {
  return state.profilePage.status
}