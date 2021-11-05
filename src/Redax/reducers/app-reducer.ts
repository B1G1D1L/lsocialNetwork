import { getAuthUserData } from "./auth-reducer";
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type actionType = {
  type: typeof INITIALIZED_SUCCESS
}

const initialState = {
  initialized: false as boolean,
}

type initialStateType = typeof initialState

const appReduce = (state = initialState, action: actionType): initialStateType => { 
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
export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());

  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess())
  })
}


export default appReduce;
