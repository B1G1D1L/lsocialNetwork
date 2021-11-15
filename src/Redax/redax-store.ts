import { applyMiddleware, combineReducers, createStore, compose, Action } from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";  
import { reducer as formReducer } from 'redux-form'

import authReduce from "./reducers/auth-reducer";
import messageReduce from "./reducers/message-reducer";
import profileReduce from "./reducers/profile-reducer";
import usersReduce from "./reducers/users-reducer";
import appReduce from "./reducers/app-reducer";

// Root Reducer
let rootReducer = combineReducers({
  profilePage: profileReduce,
  messagePage: messageReduce,
  usersPage: usersReduce,
  auth: authReduce,
  app: appReduce,
  form: formReducer,
})


// Redux DevTools
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store
const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunkMiddleware),
    composeEnhancers()
  )
);

// Types
export type AppStateType = ReturnType<typeof rootReducer>   // General State
export type DispatchType = typeof store.dispatch  // Dispatch
export type Nullable<T> = null | T  // Null | any
export type BaseThunkType<A extends Action, R = Promise<any>> = 
  ThunkAction<R, AppStateType, unknown, A> //Think

// Inferring the types of action creators
export type InferActionsTypes<T> = 
T extends { [keys: string]: (...args: Array<any>) => infer U } ? U : never

//@ts-ignore
window.store = store;

export default store;