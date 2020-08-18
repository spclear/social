import React from 'react';
import { connect } from 'react-redux';
import DialogsList from './DialogsList';

let mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.usersDialogs,
    getName: id => state.usersPage.getName(id),
    getAvatar: id => state.usersPage.getAvatar(id),
  }
}

const DialogsListContainer = connect(mapStateToProps)(DialogsList);


export default DialogsListContainer;