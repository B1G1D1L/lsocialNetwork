import MyPosts from './MyPosts';
import { actionsProfile } from '../../../Redax/reducers/profile-reducer';
import { connect } from 'react-redux';
import { AppStateType, DispatchType } from '../../../Redax/redax-store';


const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
  }
};
const mapDispatchToProps = (dispatch: DispatchType) => {
  return {
    addPost: (newPostText: string) => dispatch(actionsProfile.addPostActionCreator(newPostText)),
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;