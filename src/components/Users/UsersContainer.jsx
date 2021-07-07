import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUserCount, setUsers, toggleIsFetching, unfollow } from '../../Redax/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

  componentDidMount() { 
    this.props.toggleIsFetching(true);
    // "/?count=2&page" - доп. параметры
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
    //фейковая заглушка <></>
    return <>
      {this.props.isFetching ? <Preloader /> : 
      <Users currentPage={this.props.currentPage}
             totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             unfollow={this.props.unfollow}
             follow={this.props.follow} />}
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow:            (userId) => dispatch( followAC(userId) ),
//     unfollow:          (userId) => dispatch( unfollowAC(userId) ),
//     setUsers:          (users) => dispatch( setUsersAC(users) ),
//     setCurrentPage:    (pageNumber) => dispatch( setCurrentPageAC(pageNumber) ),
//     setTotalUserCount: (totalCount) => dispatch( setTotalUserCountAC(totalCount) ),
//     toggleIsFetching:  (isFetching) => dispatch( toggleIsFetchingAC(isFetching) ),
//   }
// }

export default connect(mapStateToProps, {
  follow, unfollow, setUsers, setCurrentPage, setTotalUserCount, toggleIsFetching,
})(UsersContainer);