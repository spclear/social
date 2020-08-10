import React from 'react';
import DialogsList from './DialogsList';

const DialogsListContainer = (props) => {
  const state = props.store.getState();
  
  const dialogs = state.messagesPage.usersDialogs;
  const getName = state.profilePage.getName.bind(state.profilePage);
  const getAvatar = state.profilePage.getAvatar.bind(state.profilePage);
  
  return (
    <DialogsList
      dialogs={dialogs}
      getName={getName}
      getAvatar={getAvatar}
    />
  )
}

export default DialogsListContainer;