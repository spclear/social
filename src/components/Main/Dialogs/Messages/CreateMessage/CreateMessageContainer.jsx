import { connect } from 'react-redux';
import CreateMessage from './CreateMessage';
import { updateMessageInput, sendMessage }
  from '../../../../../redux/actionCreators';

const idSelf = "641006348";

let mapStateToProps = (state) => {
  return {
    value: state.messagesPage.currentMessageField,
  }
}

let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    update: (value) => {
      dispatch(updateMessageInput(value));
    },
    sendMessage: () => {
      dispatch(sendMessage(ownProps.userId, idSelf))
    }
  }
}

const CreateMessageContainer =
  connect(mapStateToProps, mapDispatchToProps)(CreateMessage);

export default CreateMessageContainer;
