import { authAPI, profileAPI } from "./../../api/api";
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PROFILE_PHOTOS = 'SET_USER_PROFILE_PHOTOS';

let initialState = {
  id: null,
  email: null,
  login: null,
  userPhoto: null,
  isAuth: false,
}

const authReduce = (state = initialState, action) => {
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

// Actions creator
export const setAuthUserData = (id, email, login, isAuth) => (
  { type: SET_USER_DATA, payload: { id, email, login, isAuth } }
);

export const setUserProfilePhoto = (userPhoto) => (
  { type: SET_USER_PROFILE_PHOTOS, userPhoto }
);

// Thunk creator
export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();

  if (response.resultCode === 0) {
    let { id, email, login } = response.data
    dispatch(setAuthUserData(id, email, login, true))
  }
}

export const getUserProfilePhoto = (userId) => async (dispatch) => {
  const response = await profileAPI.getUserProfile(userId);
  dispatch(setUserProfilePhoto(response.data.photos.small));
}

export const login = (email, password, rememberMe) => async dispatch => {
  let response = await authAPI.login(email, password, rememberMe);

  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    let message = response.data.messages.length > 0
      ? response.data.messages[0]
      : 'Common Error';
    dispatch(stopSubmit('login', { _error: message }));
  }
}

export const logout = () => async dispatch => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}

export default authReduce;
