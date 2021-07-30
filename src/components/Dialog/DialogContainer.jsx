import { addMessageCreator, updateNewTextMessageCreator } from '../../Redax/message-reducer';
import Dialog from './Dialog';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRdirect';

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

const authRedirectComponent = withAuthRedirect(Dialog);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent);

export default DialogsContainer;