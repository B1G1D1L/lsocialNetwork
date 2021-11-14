import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";  
// import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form'

import authReduce from "./reducers/auth-reducer";
import messageReduce from "./reducers/message-reducer";
import profileReduce from "./reducers/profile-reducer";
import usersReduce from "./reducers/users-reducer";
import appReduce from "./reducers/app-reducer";

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

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunkMiddleware),
    composeEnhancers()
  )
);

// type State
export type AppStateType = ReturnType<typeof rootReducer>

// Type Dispatch
export type DispatchType = typeof store.dispatch

// Type Null | any
export type Nullable<T> = null | T 

// Inferring the types of action creators
type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T extends {[key: string]: (...args: Array<any>) => any}> = ReturnType<PropertiesTypes<T>>

//@ts-ignore
window.store = store;

export default store;