const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReduce = (state, action) => { 

  switch(action.type) {
    case ADD_POST:
      let post = {
        id: 4,
        name: ' ',
        message: state.newPostText,
      };
      state.posts.push(post);
      state.newPostText = '';
    
    case UPDATE_NEW_POST_TEXT: 
      state.newPostText = action.text;

    default: return state;
  }

};

export default profileReduce;