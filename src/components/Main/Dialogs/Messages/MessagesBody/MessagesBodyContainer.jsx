import { connect } from 'react-redux';
import MessagesBody from './MessagesBody';
import * as selectors from '../../../../../redux/selectors';

let mapStateToProps = (state) => {
  return {
    dialogs: selectors.getUsersDialogs(state),
    currentDialog: selectors.getCurrentDialogId(state),
    idSelf: selectors.getLoggedUser(state),
    getAvatar: selectors.getAvatarGetter(state),
    getDialog: selectors.getDialogGetter(state),
  }
}

const MessagesBodyContainer = connect(mapStateToProps)(MessagesBody);

export default MessagesBodyContainer;