import { profileAPI } from "../../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'; 
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
  posts: [
    {
      id: 1, 
      message: 'как дела', 
      name: 'Ilta',
      urlAvatar: 'https://c.wallhere.com/photos/1e/7d/1600x1200_px_action_adventure_alien_Aliens_Avatar_fantasy_fi-1635355.jpg!d'
    },
    {
      id: 2, 
      message: 'Я русский', 
      name: 'Ilta',
      urlAvatar: 'https://img3.goodfon.ru/wallpaper/nbig/4/99/neytiri-avatar.jpg'
    },
  ],
  profile: null,
  status: '',
}


const profileReduce = (state = initialState, action) => { 

  switch(action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        name: ' ',
        message: action.newPostText,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }

    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }

    case SET_USER_STATUS: {
      return {...state, status: action.status}
    }

    default: return state;
  }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});


export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getUserProfile(userId)
      .then(response => {
        dispatch(setUserProfile(response.data));
      }
    )
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
      .then(response =>{
        dispatch(setUserStatus(response.data));
      }
    )
  }
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
      .then(response =>{
        if(response.data.resultCode === 0) {
          dispatch(setUserStatus(status))
        }
      }
    )
  }
}

export default profileReduce;