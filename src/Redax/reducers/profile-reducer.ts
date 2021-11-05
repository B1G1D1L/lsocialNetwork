import { profileAPI } from "../../api/api";
import { PostsType, ProfileType } from "../../types/types";
import { setUserProfilePhoto } from "./auth-reducer";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_USER_PHOTO = 'SET_USER_PHOTO';


// Начальный state
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
  ] as Array<PostsType>,
  profile: null as null | ProfileType,
  status: '',
}

type InitialStateType = typeof initialState


// Reduce
const profileReduce = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        name: ' ',
        message: action.newPostText,
      };
      return {
        ...state,
        posts: [...state.posts, newPost] as Array<PostsType>,
      };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }

    case SET_USER_STATUS: {
      return { ...state, status: action.status }
    }

    case SET_USER_PHOTO: {
      return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
    }

    default: return state;
  }
};


// Actions creator
export const addPostActionCreator = (newPostText: string) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile: ProfileType) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status: string) => ({ type: SET_USER_STATUS, status });
export const setPhotoSuccess = (photos: any) => ({type: SET_USER_PHOTO, photos});


// Thunks creator
export const getUserProfile = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getUserProfile(userId);
  dispatch(setUserProfile(response.data));
};
export const getStatus = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(response.data));
};
export const updateStatus = (status: string) => async (dispatch: any) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
}
export const savePhoto = (photoFile: any) => async (dispatch: any) => {
  const response = await profileAPI.savePhoto(photoFile);
  
  if(response.data.resultCode === 0) {
    dispatch(setPhotoSuccess(response.data.data.photos));
    dispatch(setUserProfilePhoto(response.data.data.photos.small));
  }
}

export default profileReduce;