import { connect } from 'react-redux';
import MessagesBody from './MessagesBody';

let mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.usersDialogs,
    currentDialog: state.messagesPage.currentDialog,
    idSelf: state.profilePage.currentUser,
    getAvatar: id => state.usersPage.getAvatar(id),
    getDialog: id => state.messagesPage.getDialog(id),
  }
}

const MessagesBodyContainer = connect(mapStateToProps)(MessagesBody);

export default MessagesBodyContainer;