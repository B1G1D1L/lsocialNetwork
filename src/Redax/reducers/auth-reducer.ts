import { FormAction, stopSubmit } from 'redux-form';
import { BaseThunkType, InferActionsTypes } from "../redax-store";
import { authAPI } from '../../api/auth-api';
import { profileAPI } from '../../api/profile-api';


// State
let initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  userPhoto: null as string | null,
  isAuth: false as boolean,
}


// Reduce 
const authReduce = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {

    case 'auth/SET_USER_DATA': {
      return {
        ...state,
        ...action.payload,
      }
    }

    case 'auth/SET_USER_PROFILE_PHOTOS': {
      return {
        ...state,
        userPhoto: action.userPhoto
      }
    }

    default:
      return state;
  }
};


// Actions creator
export const actionsAuth = {
  // Утсановить данные о пользователя
  setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => (
    { type: 'auth/SET_USER_DATA', payload: { id, email, login, isAuth }} as const),

  // Утсановить главное фото
  setUserProfilePhoto: (userPhoto: any) => (
    { type: 'auth/SET_USER_PROFILE_PHOTOS', userPhoto } as const
  ),
  
}


// Thunk creator
export const getAuthUserData = (): ThunkTypes => async (dispatch) => {
  let response = await authAPI.me();

  if (response.resultCode === 0) {
    let { id, email, login } = response.data
    dispatch(actionsAuth.setAuthUserData(id, email, login, true))
  }
} // Авторизация (Boolean)

export const getUserProfilePhoto = (userId: number): ThunkTypes => async (dispatch) => {
  const response = await profileAPI.getUserProfile(userId)
  dispatch(actionsAuth.setUserProfilePhoto(response.photos.small))
} // Получить маленькую фото пользователя (для Header)

export const login = (email: string, password: string, rememberMe: boolean): ThunkTypes => 
async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);

  if (response.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    let message = response.messages.length > 0
      ? response.messages[0]
      : 'Common Error';
    dispatch(stopSubmit('login', { _error: message }));
  }
} // Войти в уч. запись

export const logout = (): ThunkTypes => async (dispatch) => {
  let response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(actionsAuth.setAuthUserData(null, null, null, false));
  }
} // Выйти из уч. запись

export default authReduce;


// Types
type initialStateType = typeof initialState // State
type ActionsType = InferActionsTypes<typeof actionsAuth> // actions
type ThunkTypes = BaseThunkType<ActionsType | FormAction> // Thunk. FormAction для redux-form

