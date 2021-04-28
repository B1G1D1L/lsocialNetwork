import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewTextActionCreator } from '../../../Redax/profile-reducer';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {
  //let state = props.store.getState();

  // const addPost = () => {
  //   props.store.dispatch(addPostActionCreator());
  // };

  // const onPostChange = (text) => {
  //   props.store.dispatch(updateNewTextActionCreator(text));
  // };

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };
      
        const onPostChange = (text) => {
          store.dispatch(updateNewTextActionCreator(text));
        };

        return (
          <MyPosts addPost={addPost}
            unpadeNewPostText={onPostChange}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText} />
        )
      }  
    }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;