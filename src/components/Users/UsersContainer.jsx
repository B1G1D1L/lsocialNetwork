import React from 'react';
import { connect } from 'react-redux';
import { 
  follow,
  setCurrentPage,
  setTotalUserCount, 
  setUsers, 
  toggleIsFetching, 
  unfollow, 
  toggleFollowingProgress,
  getUsers } from '../../Redax/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component {
  componentDidMount() { 
    this.props.getUsers(this.props.pageSize, this.props.currentPage);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(this.props.pageSize, pageNumber);
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
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUserCount, toggleIsFetching,
    toggleFollowingProgress, getUsers, 

  })(UsersContainer);