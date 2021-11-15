import { userAPI } from "../../api/user-api";
import { UsersType } from "../../types/types";
import { BaseThunkType, DispatchType, InferActionsTypes } from "../redax-store";


// State
let initialState = {
  users: [] as Array<UsersType>,
  pageSize: 5 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: false as boolean,
  followingInProgress: [] as Array<number>, // Массив ID пользователей
}


// Reduce
const messageReduce = (state = initialState, action: ActionsType): InitialStateType => {

  switch (action.type) {

    case 'users/FOLLOW': {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return { ...user }
        })
      }
    }

    case 'users/UNFOLLOW': {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return { ...user }
        })
      }
    }

    case 'users/SET_USERS': {
      return { ...state, users: action.users }
    }

    case 'users/SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.currentPage }
    }

    case 'users/SET_TOTAL_USER_COUNT': {
      return { ...state, totalUsersCount: action.totalUserCount }
    }

    case 'users/TOGGLE_IS_FETCHING': {
      return { ...state, isFetching: action.isFetching }
    }

    case 'users/FOLLOWING_IS_PROGRESS': {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    }

    default:
      return state;

  }
};


// Action creator
export const actionsUsers = {
  followSuccess: (userId: number) => ({ type: 'users/FOLLOW', userId } as const),
  unfollowSuccess: (userId: number) => ({ type: 'users/UNFOLLOW', userId } as const),
  setUsers: (users: Array<UsersType>) => ({ type: 'users/SET_USERS', users } as const),
  setCurrentPage: (currentPage: number) => (
    { type: 'users/SET_CURRENT_PAGE', currentPage: currentPage} as const),
  setTotalUserCount: (totalCount: number) => (
    { type: 'users/SET_TOTAL_USER_COUNT', totalUserCount: totalCount } as const),
  toggleIsFetching: (isFetching: boolean) => (
    { type: 'users/TOGGLE_IS_FETCHING', isFetching: isFetching } as const),
  toggleFollowingProgress: (isFetching: boolean, userId: number) => (
    { type: 'users/FOLLOWING_IS_PROGRESS', isFetching, userId } as const)
}


// Thunk creator
export const requestUsers = 
(page: number, currentPage: number): ThunkTypes => async (dispatch: DispatchType) => {
  dispatch(actionsUsers.toggleIsFetching(true));
  dispatch(actionsUsers.setCurrentPage(currentPage));

  let response = await userAPI.getUsers(page, currentPage);
  dispatch(actionsUsers.setUsers(response.items));
  dispatch(actionsUsers.setTotalUserCount(response.totalCount));
  dispatch(actionsUsers.toggleIsFetching(false));
} // Получить пользователей 

export const follow = (userId: number): ThunkTypes => async (dispatch: DispatchType) => {
  dispatch(actionsUsers.toggleFollowingProgress(true, userId));

  let response = await userAPI.getFollow(userId);
  if (response.resultCode === 0) {
    dispatch(actionsUsers.followSuccess(userId))
  }
  dispatch(actionsUsers.toggleFollowingProgress(false, userId))
} // Подписаться на пользователя 

export const unfollow = (userId: number): ThunkTypes => async (dispatch: DispatchType) => {
  dispatch(actionsUsers.toggleFollowingProgress(true, userId));

  let response = await userAPI.getUnfollow(userId);
  if (response.resultCode === 0) {
    dispatch(actionsUsers.unfollowSuccess(userId))
  }
  dispatch(actionsUsers.toggleFollowingProgress(false, userId))
} // Отписаться от пользователя


export default messageReduce;


// Types
type InitialStateType = typeof initialState                // State
type ActionsType = InferActionsTypes<typeof actionsUsers>  // Actions
type ThunkTypes = BaseThunkType<ActionsType>               // Thunk