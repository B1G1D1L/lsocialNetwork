import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewTextActionCreator } from '../../../Redax/profile-reducer';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    props.store.dispatch(updateNewTextActionCreator(text));
  };

  return (
    <MyPosts addPost = {addPost}
      unpadeNewPostText = {onPostChange}
      posts = {state.profilePage.posts} 
      newPostText = {state.profilePage.newPostText} />
  )
}

export default MyPostsContainer;