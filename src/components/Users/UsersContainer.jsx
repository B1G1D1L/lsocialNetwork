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
  requestUsers
  } from '../../Redax/reducers/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRdirect';
import {
  getCurrentPage,
  getFollowingProgress,
  getIsFetching, getPageSize,
  getTotalUsersCount,
  getUsers
} from '../../Redax/selectors/users-selectors';


class UsersContainer extends React.Component {
  componentDidMount() { 
    this.props.requestUsers(this.props.pageSize, this.props.currentPage);
  }

  onPageChanged = (pageNumber) => {
    this.props.requestUsers(this.props.pageSize, pageNumber);
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state),
  }
};

export default compose(
  connect(mapStateToProps, 
    {
      follow, unfollow, setUsers,
      setCurrentPage, setTotalUserCount, toggleIsFetching,
      toggleFollowingProgress, requestUsers, 
  
    }),
  withAuthRedirect
)(UsersContainer)
