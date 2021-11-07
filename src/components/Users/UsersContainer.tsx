import React from 'react';
import { connect } from 'react-redux';
import { 
  follow,
  unfollow, 
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
import { UsersType } from '../../types/types';
import { AppStateType } from '../../Redax/redax-store';


interface StatePropsType {
  pageSize: number
  currentPage: number
  pageNumber?: number
  totalUsersCount: number
  users: Array<UsersType>
  followingProgress: Array<number>
  isFetching: boolean
}

type DispatchProps = {
  unfollow: (userId: number) => void
  follow: (userId: number) => void
  requestUsers: (pageSize:  number, currentPage: number) => void
}

type PropsType = StatePropsType & DispatchProps


class UsersContainer extends React.Component<PropsType  > {

  componentDidMount() { 
    const { pageSize, currentPage } = this.props;
    this.props.requestUsers(pageSize, currentPage);
  }

  onPageChanged = (pageNumber: number) => {
    const { pageSize } = this.props;
    this.props.requestUsers(pageSize, pageNumber);
  }

  render() {
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

const mapStateToProps = (state: AppStateType): StatePropsType => {
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
  connect<StatePropsType, DispatchProps, {}, AppStateType>(
    mapStateToProps, 
    {
      follow, unfollow, requestUsers, 
    }),
  withAuthRedirect
)(UsersContainer)
