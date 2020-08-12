import { connect } from 'react-redux';
import CreateMessage from './CreateMessage';
import { updateMessageInputActionCreator, sendMessageActionCreator }
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
      dispatch(updateMessageInputActionCreator(value));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator(ownProps.userId, idSelf))
    }
  }
}

const CreateMessageContainer =
  connect(mapStateToProps, mapDispatchToProps)(CreateMessage);

export default CreateMessageContainer;
