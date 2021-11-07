import { authAPI, profileAPI } from "../../api/api";
import { stopSubmit } from 'redux-form';
import { AppStateType, DispatchType } from "../redax-store";
import { ThunkAction } from "redux-thunk";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PROFILE_PHOTOS = 'SET_USER_PROFILE_PHOTOS';

let initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  userPhoto: null as string | null,
  isAuth: false as boolean,
}

type initialStateType = typeof initialState
type ActionsType = SetAuthUserDataActionType | SetUserProfilePhotoActionType

// Reduce 
const authReduce = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {

    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      }
    }

    case SET_USER_PROFILE_PHOTOS: {
      return {
        ...state,
        userPhoto: action.userPhoto
      }
    }

    default:
      return state;
  }
};


// Actions creator ***
type SetAuthUserDataPayloadType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}
export type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataPayloadType
}
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => (
  { type: SET_USER_DATA, payload: { id, email, login, isAuth } }
);
type SetUserProfilePhotoActionType = {
  type: typeof SET_USER_PROFILE_PHOTOS,
  userPhoto: string
}
export const setUserProfilePhoto = (userPhoto: any): SetUserProfilePhotoActionType => (
  { type: SET_USER_PROFILE_PHOTOS, userPhoto }
);

// Thunk creator
type ThunkTypes = ThunkAction<void, AppStateType, unknown, ActionsType>

export const getAuthUserData = () => async (dispatch: DispatchType) => {
  let response = await authAPI.me();

  if (response.resultCode === 0) {
    let { id, email, login } = response.data
    dispatch(setAuthUserData(id, email, login, true))
  }
}

export const getUserProfilePhoto = (userId: number): ThunkTypes => async (dispatch: DispatchType) => {
  const response = await profileAPI.getUserProfile(userId)
  dispatch(setUserProfilePhoto(response.photos.small))
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
  let response = await authAPI.login(email, password, rememberMe);

  if (response.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    let message = response.messages.length > 0
      ? response.messages[0]
      : 'Common Error';
    dispatch(stopSubmit('login', { _error: message }));
  }
}

export const logout = (): ThunkTypes => async (dispatch: DispatchType) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}

export default authReduce;
