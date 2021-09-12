import { addMessageCreator } from '../../Redax/message-reducer';
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
    addMessage: (newMessage) => dispatch(addMessageCreator(newMessage))
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialog)

