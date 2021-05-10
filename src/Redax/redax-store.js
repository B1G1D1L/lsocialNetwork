import { combineReducers, createStore } from "redux";
import friendsReduce from "./friends-reducer";
import messageReduce from "./message-reducer";
import profileReduce from "./profile-reducer";

let reduces = combineReducers({
  profilePage: profileReduce,
  messagePage: messageReduce,
  friends: friendsReduce
})

let store = createStore(reduces);

window.store = store;

export default store;