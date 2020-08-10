import React from 'react';
import MessagesBody from './MessagesBody';

const MessagesBodyContainer = (props) => {
  const idSelf = "641006348";
  
  const state = props.store.getState();
  const dialogs = state.messagesPage.usersDialogs;
  const getAvatar = state.profilePage.getAvatar.bind(state.profilePage);

  return (
    <MessagesBody
      idSelf={idSelf}
      dialogs={dialogs}
      getAvatar={getAvatar}
    />
  )
}

export default MessagesBodyContainer;