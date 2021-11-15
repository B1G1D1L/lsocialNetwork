import { BaseThunkType, InferActionsTypes } from "../redax-store";
import { getAuthUserData } from "./auth-reducer";


// State
const initialState = {
  initialized: false,
}


// Reducer
const appReducer = (state = initialState, action: ActionsTypes): initialStateType => { 
  switch(action.type) {

    case 'SN/APP/INITIALIZED_SUCCESS': {
      return {
        ...state, 
        initialized: true,
      }
    }

    default: 
      return state;
  }
};


// actions creator
const actionsApp = {
  initializedSuccess: () => ({type: 'SN/APP/INITIALIZED_SUCCESS'} as const)
}


// Thunk creator
export const initializeApp = (): ThunkTypes => async (dispatch) => {
  let promise = await dispatch(getAuthUserData());

  Promise.all([promise]).then(() => {
    dispatch(actionsApp.initializedSuccess())
  })
} // Выполнение всех запросов


export default appReducer;


// Types
type initialStateType = typeof initialState // State
type ActionsTypes = InferActionsTypes<typeof actionsApp> // Actions
type ThunkTypes = BaseThunkType<ActionsTypes> // Thunk
