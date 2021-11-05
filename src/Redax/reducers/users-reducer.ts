import { userAPI } from "../../api/api";
import { UsersType } from "../../types/types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IS_PROGRESS = 'FOLLOWING_IS_PROGRESS';


let initialState = {
  users: [] as Array<UsersType>,
  pageSize: 5 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: false as boolean,
  followingInProgress: [] as Array<number>, // Массив ID пользователей
}

type InitialStateType = typeof initialState


// Reduce
const messageReduce = (state = initialState, action: any): InitialStateType => {

  switch (action.type) {

    case FOLLOW: {
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

    case UNFOLLOW: {
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

    case SET_USERS: {
      return { ...state, users: action.users }
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }

    case SET_TOTAL_USER_COUNT: {
      return { ...state, totalUsersCount: action.totalUserCount }
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }

    case FOLLOWING_IS_PROGRESS: {
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
type FollowSuccessActionType = {
  type: typeof FOLLOW
  userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType  => ({ type: FOLLOW, userId });

type UnfollowSuccessActionType = {
  type: typeof UNFOLLOW
  userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({ type: UNFOLLOW, userId });

type SetUsersActionType = {
  type: typeof SET_USERS
  users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({ type: SET_USERS, users });

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => (
  { type: SET_CURRENT_PAGE, currentPage: currentPage }
);

type SetTotalUserCountActionType = {
  type:  typeof SET_TOTAL_USER_COUNT
  totalUserCount: number
}
export const setTotalUserCount = (totalCount: number): SetTotalUserCountActionType => (
  { type: SET_TOTAL_USER_COUNT, totalUserCount: totalCount }
);

type ToggleIsFetching = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean) => (
  { type: TOGGLE_IS_FETCHING, isFetching: isFetching }
);

type ToggleFollowingProgressActionType = {
  type: typeof FOLLOWING_IS_PROGRESS
  isFetching: boolean
  userId: number
}
export const toggleFollowingProgress = 
(isFetching: boolean, userId: number): ToggleFollowingProgressActionType => (
  { type: FOLLOWING_IS_PROGRESS, isFetching, userId }
);


// Thunk creator
export const requestUsers = (page: number, currentPage: number) => async (dispatch: any) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(currentPage));

  let response = await userAPI.getUsers(page, currentPage);
  dispatch(setUsers(response.items));
  dispatch(setTotalUserCount(response.totalCount));
  dispatch(toggleIsFetching(false));
}
export const follow = (userId: number) => async (dispatch: any) => {
  dispatch(toggleFollowingProgress(true, userId));

  let response = await userAPI.getFollow(userId);
  if (response.resultCode === 0) {
    dispatch(followSuccess(userId))
  }
  dispatch(toggleFollowingProgress(false, userId))
}
export const unfollow = (userId: number) => async (dispatch: any) => {
  dispatch(toggleFollowingProgress(true, userId));

  let response = await userAPI.getUnfollow(userId);
  if (response.resultCode === 0) {
    dispatch(unfollowSuccess(userId))
  }
  dispatch(toggleFollowingProgress(false, userId))
}


export default messageReduce;
