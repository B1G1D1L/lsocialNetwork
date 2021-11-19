import React from 'react';
import { connect } from 'react-redux';
import { 
  follow,
  unfollow, 
  requestUsers,
  FilterType
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
import { AppStateType, Nullable } from '../../Redax/redax-store';




class UsersContainer extends React.Component<PropsType> {

  componentDidMount() { 
    const { pageSize, currentPage } = this.props;
    this.props.requestUsers(pageSize, currentPage, {term: '', friend: null});
  }

  onPageChanged = (pageNumber: number) => {
    const { pageSize } = this.props;
    this.props.requestUsers(pageSize, pageNumber, {term: '', friend: null});
  }

  onChangeFilters = (filters: string, friend: Nullable<boolean>) => {
    this.props.requestUsers(this.props.pageSize , 1, {term: filters, friend})
  }

  render() {
    return <>
    <Users 
      currentPage={this.props.currentPage}
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      users={this.props.users}
      isFetching={this.props.isFetching}

      onChangeFilters={this.onChangeFilters}
      onPageChanged={this.onPageChanged}
      unfollow={this.props.unfollow}
      follow={this.props.follow}
      followingProgress={this.props.followingProgress} 
    />
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



export default compose<React.ComponentType>(
  connect<StatePropsType, DispatchProps, {}, AppStateType>(
    mapStateToProps, 
    {
      follow, unfollow, requestUsers, 
    }),
  withAuthRedirect
)(UsersContainer)


// Type 
interface StatePropsType {
  pageSize: number
  currentPage: number
  totalUsersCount: number
  users: Array<UsersType>
  followingProgress: Array<number>
  isFetching: boolean
}

type DispatchProps = {
  unfollow: (userId: number) => void
  follow: (userId: number) => void
  requestUsers: (pageSize:  number, currentPage: number, filters: FilterType,) => void
}

type PropsType = StatePropsType & DispatchProps
