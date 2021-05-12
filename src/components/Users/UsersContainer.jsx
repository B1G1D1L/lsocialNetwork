import Users from './Users';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../Redax/users-reducer';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: () =>   dispatch(followAC() ),
    unfollow: () => dispatch(unfollowAC() ),
    setUsers: () => dispatch(setUsersAC() )
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;