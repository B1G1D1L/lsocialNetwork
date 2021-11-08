import { ThunkAction } from "redux-thunk";
import { profileAPI } from "../../api/profile-api";
import { PostsType, ProfileType } from "../../types/types";
import { AppStateType, DispatchType } from "../redax-store";
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
type ActionsType = AddPostActionCreatorType | SetUserProfileType | SetUserStatusType | SetPhotoSuccessType

// Reduce
const profileReduce = (state = initialState, action: ActionsType): InitialStateType => {
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
type AddPostActionCreatorType = {
  type: typeof ADD_POST
  newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType => ({ type: ADD_POST, newPostText });
type SetUserProfileType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({ type: SET_USER_PROFILE, profile });
type SetUserStatusType = {
  type: typeof SET_USER_STATUS
  status: string
}
export const setUserStatus = (status: string): SetUserStatusType => ({ type: SET_USER_STATUS, status });
type SetPhotoSuccessType = {
  type: typeof SET_USER_PHOTO
  photos: any
}
export const setPhotoSuccess = (photos: any): SetPhotoSuccessType => ({type: SET_USER_PHOTO, photos});


// Thunks creator
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

export const getUserProfile = (userId: number): ThunkType => async (dispatch: DispatchType) => {
  let response = await profileAPI.getUserProfile(userId);
  dispatch(setUserProfile(response));
};
export const getStatus = (userId: number): ThunkType => async (dispatch: DispatchType) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(response.data));
};
export const updateStatus = (status: string): ThunkType => async (dispatch: DispatchType) => {
  let res = await profileAPI.updateStatus(status);
  if (res.resultCode === 0) {
    console.log(res)
    dispatch(setUserStatus(status));
  }
}
export const savePhoto = (photoFile: any): ThunkType => async (dispatch: DispatchType) => {
  const response = await profileAPI.savePhoto(photoFile);
  
  if(response.resultCode === 0) {
    dispatch(setPhotoSuccess(response.data));
    dispatch(setUserProfilePhoto(response.data.small));
  }
}

export default profileReduce;