import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC } from '../../Redax/users-reducer';
import Users from './Users';
import preloader from '../../assets/images/loader.svg';

class UsersContainer extends React.Component {

  componentDidMount() { 
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=${this.props.pageSize}&page=${this.props.currentPage}`)
    .then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUserCount(response.data.totalCount)
      this.props.toggleIsFetching(false);
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=${this.props.pageSize}&page=${pageNumber}`)
    .then(response => {
      this.props.setUsers(response.data.items);
      this.props.toggleIsFetching(false);
    })
  }

  render() {
    //фековая заглушка <></>
    return <>
      {this.props.isFetching ? <img src={preloader} alt='preloader' /> : null}
      <Users currentPage={this.props.currentPage}
             totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             unfollow={this.props.unfollow}
             follow={this.props.follow} />
    </>
  }
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow:            (userId) => dispatch( followAC(userId) ),
    unfollow:          (userId) => dispatch( unfollowAC(userId) ),
    setUsers:          (users) => dispatch( setUsersAC(users) ),
    setCurrentPage:    (pageNumber) => dispatch( setCurrentPageAC(pageNumber) ),
    setTotalUserCount: (totalCount) => dispatch( setTotalUserCountAC(totalCount) ),
    toggleIsFetching:  (isFetching) => dispatch( toggleIsFetchingAC(isFetching) ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);