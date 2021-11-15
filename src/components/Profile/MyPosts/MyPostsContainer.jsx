import MyPosts from './MyPosts';
import { actionsProfile } from '../../../Redax/reducers/profile-reducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => dispatch(actionsProfile.addPostActionCreator(newPostText)),
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;