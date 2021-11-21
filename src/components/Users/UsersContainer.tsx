import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRdirect';

import { AppStateType } from '../../Redax/redax-store';




class UsersContainer extends React.Component<PropsType> {
  render() {
    return <>
      <Users />
    </>
  }
};


export default compose<React.ComponentType>(
  connect<{}, {}, {}, AppStateType>( null, {} ),
  withAuthRedirect
)(UsersContainer)


// Type 
type PropsType = {}