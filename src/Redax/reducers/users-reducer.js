import { userAPI } from "../../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'; 
const FOLLOWING_IS_PROGRESS = 'FOLLOWING_IS_PROGRESS'; 

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

const messageReduce = (state = initialState, action) => { 
  
  switch(action.type) {

    case FOLLOW: {
      return {
        ...state, 
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return {...user}
        })
      }
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return {...user}
        })
      }
    }

    case SET_USERS: {
      return { ...state, users: action.users }
    }

    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }

    case SET_TOTAL_USER_COUNT: {
      return {...state, totalUsersCount: action.totalUserCount}
    }

    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
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

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setTotalUserCount = (totalCount) => ({ type: SET_TOTAL_USER_COUNT, totalUserCount: totalCount })
export const toggleIsFetching =  (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({type: FOLLOWING_IS_PROGRESS, isFetching, userId});

export const requestUsers = (page, currentPage) => { 
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    
    userAPI.getUsers(page, currentPage) // DAL
    .then(data => {
      dispatch(setUsers(data.items));
      dispatch(setTotalUserCount(data.totalCount));
      dispatch(toggleIsFetching(false));
    })
  }
}

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    
    userAPI.getFollow(userId)
      .then(data => {
        if (data.resultCode === 0) { // если 0 то залогинены
          dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
      })
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));

    userAPI.getUnfollow(userId)
      .then(data => {
        if (data.resultCode === 0) { // если 0 то залогинены
          dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
      })
  }
}



export default messageReduce;
