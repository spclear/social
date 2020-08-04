import React from 'react';
import { Route } from 'react-router-dom';
import styles from './dialogs.module.css'
import DialogsList from './DialogsList/DialogsList';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <DialogsList
        dialogs={props.store.state.usersDialogs}
      />
      <Route path="/dialogs/messages" component={() => (
        <Messages
          userName='Ann'
          dialog={props.store.state.usersDialogs}
        />
      )}>
      </Route>
    </div>
  );
}
export default Dialogs;
