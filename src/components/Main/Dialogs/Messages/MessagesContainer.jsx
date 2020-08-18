import { connect } from 'react-redux';
import Messages from './Messages';

let mapStateToProps = (state) => {
  return {
    getName: id => state.usersPage.getName(id),
    currentDialog: state.messagesPage.currentDialog,
  }
}

let MessagesContainer = connect(mapStateToProps)(Messages);

export default MessagesContainer;