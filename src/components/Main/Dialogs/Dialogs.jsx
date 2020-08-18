import React from 'react';
import { Route } from 'react-router-dom';
import styles from './dialogs.module.css'
import DialogsListContainer from './DialogsList/DialogsListContainer';
import MessagesContainer from './Messages/MessagesBody/MessagesContainer';

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <DialogsListContainer />
      <Route
        path="/dialogs/messages"
        render={() => <MessagesContainer />}
      />
    </div>
  )
}
export default Dialogs;
