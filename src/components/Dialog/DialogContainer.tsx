import { actionsMessage } from '../../Redax/reducers/message-reducer';
import Dialog from './Dialog';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRdirect';
import { compose } from 'redux';
import { AppStateType, DispatchType } from '../../Redax/redax-store';
import React from 'react';

const mapStateToProps = (state: AppStateType) => {
  return {
    dialogData: state.messagePage.dialogData,
    messageData: state.messagePage.messageData,
  }
};
const mapDispatchToProps = (dispatch: DispatchType) => {
  return {
    addMessage: (newMessage: string) => dispatch(actionsMessage.addMessageCreator(newMessage))
  }
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialog)

