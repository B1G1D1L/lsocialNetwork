import { AppStateType } from "../redax-store";

export const getProfile = (state: AppStateType) => {
  return state.profilePage.profile
} 

export const getStatusSL = (state: AppStateType) => {
  return state.profilePage.status
}

export const getPosts = (state: AppStateType) => {
  return state.profilePage.posts
}