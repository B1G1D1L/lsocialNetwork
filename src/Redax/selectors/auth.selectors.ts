import { AppStateType } from "../redax-store";

export const getIsAuth = (state: AppStateType) => {
  return state.auth.isAuth
}