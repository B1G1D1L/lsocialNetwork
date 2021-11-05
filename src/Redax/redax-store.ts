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


export type AppStateType = ReturnType<typeof rootReducer>
export type DispatchType = typeof store.dispatch

//@ts-ignore
window.store = store;

export default store;