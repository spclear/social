import { connect } from 'react-redux';
import CreateMessage from './CreateMessage';
import { updateMessageInputAC, sendMessageAC }
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
      dispatch(updateMessageInputAC(value));
    },
    sendMessage: () => {
      dispatch(sendMessageAC(ownProps.userId, idSelf))
    }
  }
}

const CreateMessageContainer =
  connect(mapStateToProps, mapDispatchToProps)(CreateMessage);

export default CreateMessageContainer;
