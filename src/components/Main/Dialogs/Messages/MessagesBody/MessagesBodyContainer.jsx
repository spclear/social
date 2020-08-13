import { connect } from 'react-redux';
import MessagesBody from './MessagesBody';

const idSelf = "641006348";

let mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.usersDialogs,
    idSelf: idSelf,
    getAvatar: id => state.usersPage.getAvatar(id),
  }
}

const MessagesBodyContainer = connect(mapStateToProps)(MessagesBody);

export default MessagesBodyContainer;