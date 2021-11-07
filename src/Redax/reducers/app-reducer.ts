import { ThunkAction } from "redux-thunk";
import { AppStateType, DispatchType } from "../redax-store";
import { getAuthUserData } from "./auth-reducer";
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  initialized: false as boolean,
}

type initialStateType = typeof initialState
type ActionsType = initializedSuccessActionType

const appReduce = (state = initialState, action: ActionsType): initialStateType => { 
  switch(action.type) {

    case INITIALIZED_SUCCESS: {
      return {
        ...state, 
        initialized: true
      }
    }

    default: 
      return state;
  }
};

// actions creator
export type initializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}
const initializedSuccess = (): initializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

// Thunk creator
type ThunkTypes = ThunkAction<void, AppStateType, unknown, ActionsType>

export const initializeApp = (): ThunkTypes => async (dispatch: any) => {
  let promise = await dispatch(getAuthUserData());

  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess())
  })
}


export default appReduce;
