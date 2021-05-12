const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    // {id: 1, followed: false, fullName: 'Yura', status: 'I am imba', location: { sity: 'Prokutkino', country: 'Russia' } },
    // {id: 2, followed: true, fullName: 'Vasya', status: 'I am Kat', location: { sity: 'Moscow', country: 'Russia' } },
    // {id: 3, followed: false, fullName: 'Yura', status: 'I am imba', location: { sity: 'Tymen', country: 'Russia' } },
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
