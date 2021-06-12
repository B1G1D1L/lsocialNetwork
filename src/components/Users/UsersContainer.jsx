import Users from './Users';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC, unfollowAC } from '../../Redax/users-reducer';


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow:   (userId) =>              dispatch( followAC(userId) ),
    unfollow: (userId) =>              dispatch( unfollowAC(userId) ),
    setUsers: (users) =>               dispatch( setUsersAC(users) ),
    setCurrentPage: (pageNumber) =>    dispatch( setCurrentPageAC(pageNumber) ),
    setTotalUserCount: (totalCount) => dispatch( setTotalUserCountAC(totalCount) )
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);



export default UsersContainer;