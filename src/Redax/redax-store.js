import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";  
// import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form'

import authReduce from "./auth-reducer";
import messageReduce from "./message-reducer";
import profileReduce from "./profile-reducer";
import usersReduce from "./users-reducer";
import appReduce from "./app-reducer";

let reduces = combineReducers({
  profilePage: profileReduce,
  messagePage: messageReduce,
  usersPage: usersReduce,
  auth: authReduce,
  form: formReducer,
  app: appReduce,
})

let store = createStore(
    reduces, 
    compose(
      applyMiddleware(thunkMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

window.store = store;

export default store;