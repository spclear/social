import React from 'react';
import CreateMessage from './CreateMessage';
import { updateMessageInputActionCreator, sendMessageActionCreator }
  from '../../../../../redux/redux-store';

const CreateMessageContainer = (props) => {
  const state = props.store.getState();
  
  const value = state.messagesPage.currentMessageField;
  const idSelf = "641006348";

  const update = (value) => {
    props.store.dispatch(updateMessageInputActionCreator(value));
  }
  const sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator(props.userId, idSelf));
  }

  return (
    <CreateMessage
      value={value}
      update={update}
      sendMessage={sendMessage}
    />
  )
}

export default CreateMessageContainer;
