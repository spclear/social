import { connect } from 'react-redux';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    currentDialogId: state.messagesPage.currentDialog,
  }
}

export default connect(mapStateToProps)(Dialogs);