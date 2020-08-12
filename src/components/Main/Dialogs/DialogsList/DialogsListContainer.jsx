import React from 'react';
import { connect } from 'react-redux';
import DialogsList from './DialogsList';

let mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.usersDialogs,
    getName: (id) => {
      return state.profilePage.getName(id);
    },
    getAvatar: (id) => {
      return state.profilePage.getAvatar(id);
    }
  }
}

const DialogsListContainer = connect(mapStateToProps)(DialogsList);


export default DialogsListContainer;