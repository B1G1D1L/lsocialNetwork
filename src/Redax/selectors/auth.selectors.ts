import { AppStateType } from "../redax-store";

export const getIsAuth = (state: AppStateType) => {
  return state.auth.isAuth
}

export const getUserId = (state: AppStateType) => {
  return state.auth.id
}