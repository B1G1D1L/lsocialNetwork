import { addMessageCreator, updateNewTextMessageCreator } from '../../Redax/message-reducer';
import Dialog from './Dialog';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRdirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    dialogPage: state.messagePage,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewTextMessage: (text) => dispatch(updateNewTextMessageCreator(text)),
    addMessage: () => dispatch(addMessageCreator())
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialog)

