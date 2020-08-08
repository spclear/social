import React from 'react';
import { Route } from 'react-router-dom';
import styles from './dialogs.module.css'
import DialogsListContainer from './DialogsList/DialogsListContainer';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <DialogsListContainer store={props.store} />
      <Route
        path="/dialogs/messages"
        render={() => <Messages store={props.store} />}
      />
    </div>
  )
}
export default Dialogs;
