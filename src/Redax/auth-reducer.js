import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  id: null,
  email: null, 
  login: null,
  isAuth: false,
}

const authReduce = (state = initialState, action) => { 
  switch(action.type) {

    case SET_USER_DATA: {
      return {
        ...state, 
        ...action.data,
        isAuth: true
      }
    }

    default: 
      return state;
  }
};

export const setUserData = (data) => (
  {type: SET_USER_DATA, data}
);

export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.me()
      .then(response => {
        if(true) {
          dispatch(setUserData(response.data))
          console.log(response.data);
        }
      })
  }
}

export default authReduce;
