import { userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'; 
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
  posts: [
    {
      id: 1, 
      message: 'как дела', 
      name: 'Ilta',
      urlAvatar: 'https://c.wallhere.com/photos/1e/7d/1600x1200_px_action_adventure_alien_Aliens_Avatar_fantasy_fi-1635355.jpg!d'
    },
    {
      id: 2, 
      message: 'Я русский', 
      name: 'Ilta',
      urlAvatar: 'https://img3.goodfon.ru/wallpaper/nbig/4/99/neytiri-avatar.jpg'
    },
  ],
  newPostText: '',
  profile: null,
  status: null
}

const profileReduce = (state = initialState, action) => { 

  switch(action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        name: ' ',
        message: state.newPostText,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.text
      }; 
    }

    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }

    case SET_USER_STATUS: {
      return {...state, status: action.status}
    }

    default: return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});


// export const userStatus = (userId) => {
//   return (dispatch) => {
//     userAPI.getStatus(userId).then(status => dispatch(setUserStatus(status)));
//   }
// }


export default profileReduce;