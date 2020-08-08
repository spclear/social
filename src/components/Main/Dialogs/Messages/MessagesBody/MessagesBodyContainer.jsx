import React from 'react';
import MessagesBody from './MessagesBody';

const MessagesBodyContainer = (props) => {
  const state = props.store.getState();
  
  const idSelf = "641006348";
  const dialogs = state.messagesPage.usersDialogs;
  const getAvatar = props.store.getAvatar.bind(props.store);

  return (
    <MessagesBody
      idSelf={idSelf}
      dialogs={dialogs}
      getAvatar={getAvatar}
    />
  )
}

export default MessagesBodyContainer;