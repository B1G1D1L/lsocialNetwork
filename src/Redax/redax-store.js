import { combineReducers, createStore } from "redux";
import messageReduce from "./message-reducer";
import profileReduce from "./profile-reducer";
import usersReduce from "./users-reducer";

let reduces = combineReducers({
  profilePage: profileReduce,
  messagePage: messageReduce,
  usersPage: usersReduce
})

let store = createStore(reduces);

window.store = store;

export default store;