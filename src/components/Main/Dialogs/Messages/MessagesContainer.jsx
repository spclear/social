import { connect } from 'react-redux';
import Messages from './Messages';
import * as selectors from '../../../../redux/selectors';

let mapStateToProps = (state) => {
  return {
    currentDialog: selectors.getCurrentDialogId(state),
    getName: selectors.getNameGetter(state),
  }
}

let MessagesContainer = connect(mapStateToProps)(Messages);

export default MessagesContainer;