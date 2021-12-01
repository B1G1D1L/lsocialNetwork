import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRdirect';


class UsersContainer extends React.Component {
  render() {
    return <>
      <Users />
    </>
  }
};


export default compose<React.ComponentType>(
  connect(),
  withAuthRedirect
)(UsersContainer)

