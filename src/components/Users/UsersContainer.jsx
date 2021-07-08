import React from 'react';
import { connect } from 'react-redux';
import { 
  follow,
  setCurrentPage,
  setTotalUserCount, 
  setUsers, 
  toggleIsFetching, 
  unfollow, 
  toggleFollowingProgress } from '../../Redax/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { userAPI } from '../../api/api';

class UsersContainer extends React.Component {
  componentDidMount() { 
    this.props.toggleIsFetching(true);
    // DAL
    userAPI.getUsers(this.props.pageSize, this.props.currentPage)
    .then(data => {
      this.props.setUsers(data.items);
      this.props.setTotalUserCount(data.totalCount)
      this.props.toggleIsFetching(false);
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    // DAL
    this.props.setCurrentPage(pageNumber);
    userAPI.getUsers(this.props.pageSize, pageNumber)
    .then(data => {
      this.props.setUsers(data.items);
      this.props.toggleIsFetching(false);
    })
  }

  render() {
    //фейковая заглушка <></>
    return <>
      {this.props.isFetching ? <Preloader /> : 
      <Users currentPage={this.props.currentPage}
             totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             unfollow={this.props.unfollow}
             follow={this.props.follow}
             toggleFollowingProgress={this.props.toggleFollowingProgress}
             followingProgress={this.props.followingProgress} />}
    </>
  }
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingInProgress,
  }
};


export default connect(mapStateToProps, 
  {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    toggleIsFetching,
    toggleFollowingProgress
  })(UsersContainer);