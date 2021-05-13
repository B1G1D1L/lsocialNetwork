const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    {
      id: 1,
      photo: 'https://i05.fotocdn.net/s113/b8d246c1b6fd8335/user_xl/2538414040.jpg',
      followed: true,
      fullName: 'Yura',
      status: 'I am imba',
      location: { sity: 'Prokutkino', country: 'Russia' }
    },
    {
      id: 2,
      photo: 'https://i05.fotocdn.net/s113/b8d246c1b6fd8335/user_xl/2538414040.jpg',
      followed: true,
      fullName: 'Vasya',
      status: 'I am Kat',
      location: { sity: 'Moscow', country: 'Russia' }
    },
    {
      id: 3,
      photo: 'https://i05.fotocdn.net/s113/b8d246c1b6fd8335/user_xl/2538414040.jpg',
      followed: false,
      fullName: 'Yura',
      status: 'I am imba',
      location: { sity: 'Tymen', country: 'Russia' }
    },
  ],
}

const messageReduce = (state = initialState, action) => { 
  
  switch(action.type) {

    case FOLLOW: {
      return {
        ...state, 
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return {...user}
        })
      }
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return {...user}
        })
      }
    }

    case SET_USERS: {
      return { ...state, users: [ ...state.users, ...action.users ]}
    }

    default: 
      return state;

  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });



export default messageReduce;
