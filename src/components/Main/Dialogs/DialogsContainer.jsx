import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    currentDialogId: state.messagesPage.currentDialog,
    isLoggedIn: state.auth.isLoggedIn,
  }
}

export default compose(
  connect(mapStateToProps),
  withAuthRedirect
)(Dialogs);
