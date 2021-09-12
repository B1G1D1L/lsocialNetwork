import MyPosts from './MyPosts';
import { addPostActionCreator } from '../../../Redax/profile-reducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => dispatch(addPostActionCreator(newPostText)),
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;