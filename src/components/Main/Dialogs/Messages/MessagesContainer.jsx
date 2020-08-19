import { connect } from 'react-redux';
import Messages from './Messages';

let mapStateToProps = (state) => {
  return {
    currentDialog: state.messagesPage.currentDialog,
    getName: id => state.usersPage.getName(id),
  }
}

let MessagesContainer = connect(mapStateToProps)(Messages);

export default MessagesContainer;