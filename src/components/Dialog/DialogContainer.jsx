import { addMessageCreator, updateNewTextMessageCreator } from '../../Redax/message-reducer';
import Dialog from './Dialog';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogPage: state.messagePage,
    isAuth: state.auth.isAuth
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewTextMessage: (text) => dispatch(updateNewTextMessageCreator(text)),
    addMessage: () => dispatch(addMessageCreator())
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogsContainer;