import { ThunkAction } from "redux-thunk";
import { AppStateType, DispatchType, InferActionsTypes } from "../redax-store";
import { getAuthUserData } from "./auth-reducer";


const initialState = {
  initialized: false as boolean,
}

type initialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>

const appReduce = (state = initialState, action: ActionsTypes): initialStateType => { 
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
const actions = {
  initializedSuccess: () => ({type: 'SN/APP/INITIALIZED_SUCCESS'} as const)
}


// Thunk creator
type ThunkTypes = ThunkAction<void, AppStateType, unknown, ActionsTypes>

export const initializeApp = (): ThunkTypes => async (dispatch: any) => {
  let promise = await dispatch(getAuthUserData());

  Promise.all([promise]).then(() => {
    dispatch(actions.initializedSuccess())
  })
}


export default appReduce;
