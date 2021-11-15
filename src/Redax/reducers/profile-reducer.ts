import { FormAction } from "redux-form";
import { profileAPI } from "../../api/profile-api";
import { PostsType, ProfileType } from "../../types/types";
import { BaseThunkType, InferActionsTypes } from "../redax-store";
import { actionsAuth } from "./auth-reducer";


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
  status: '' as string,
}


// Reduce
const profileReduce = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'profile/ADD_POST': {
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

    case 'profile/SET_USER_PROFILE': {
      return { ...state, profile: action.profile }
    }

    case 'profile/SET_USER_STATUS': {
      return { ...state, status: action.status }
    }

    case 'profile/SET_USER_PHOTO': {
      return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
    }

    default: return state;
  }
};


// Actions creator
export const actionsProfile  = {
  addPostActionCreator: (newPostText: string) => ({ type: 'profile/ADD_POST', newPostText } as const),
  setUserProfile: (profile: ProfileType)=> ({ type: 'profile/SET_USER_PROFILE', profile } as const),
  setUserStatus: (status: string) => ({ type: 'profile/SET_USER_STATUS', status } as const),
  setPhotoSuccess: (photos: any) => ({type: 'profile/SET_USER_PHOTO', photos} as const)
}


// Thunks creator
export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  let response = await profileAPI.getUserProfile(userId);
  dispatch(actionsProfile.setUserProfile(response));
} // Получить информацию о пользователе 

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(actionsProfile.setUserStatus(response.data));
} // Получить статус

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  let res = await profileAPI.updateStatus(status);
  if (res.resultCode === 0) {
    console.log(res)
    dispatch(actionsProfile.setUserStatus(status));
  }
} // Обновить статус

export const savePhoto = (photoFile: File): ThunkType => async (dispatch) => {
  const response = await profileAPI.savePhoto(photoFile);
  
  if(response.resultCode === 0) {
    dispatch(actionsProfile.setPhotoSuccess(response.data));
    dispatch(actionsAuth.setUserProfilePhoto(response.data.small));
  }
} // Загрузить на сервер главное фото

export default profileReduce;


// Types
type InitialStateType = typeof initialState //State
type ActionsType = InferActionsTypes<typeof actionsProfile> //Actions
type ThunkType = BaseThunkType<ActionsType | FormAction> // Thunk
