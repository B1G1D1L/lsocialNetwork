import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewTextActionCreator } from '../../../Redax/profile-reducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    unpadeNewPostText: (text) => dispatch(updateNewTextActionCreator(text))
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;