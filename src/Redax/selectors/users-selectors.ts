import { UsersType } from "../../types/types"
import { AppStateType } from "../redax-store"

export const getUsers = (state: AppStateType): Array<UsersType> => {
  return state.usersPage.users
}

export const getPageSize = (state: AppStateType): number => {
  return state.usersPage.pageSize
}

export const getCurrentPage = (state: AppStateType): number => {
  return state.usersPage.currentPage
}

export const getTotalUsersCount = (state: AppStateType): number => {
  return state.usersPage.totalUsersCount;
}

export const getIsFetching = (state: AppStateType): boolean => {
  return state.usersPage.isFetching;
}

export const getFollowingProgress = (state: AppStateType): Array<number> => {
  return state.usersPage.followingInProgress;
}

export const getFilter = (state:AppStateType) => {
  return state.usersPage.filters
}