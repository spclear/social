import React from 'react';
import DialogsList from './DialogsList';

const DialogsListContainer = (props) => {
  const state = props.store.getState();
  
  const dialogs = state.messagesPage.usersDialogs;
  const getName = props.store.getName.bind(props.store);
  const getAvatar = props.store.getAvatar.bind(props.store);
  
  return (
    <DialogsList
      dialogs={dialogs}
      getName={getName}
      getAvatar={getAvatar}
    />
  )
}

export default DialogsListContainer;