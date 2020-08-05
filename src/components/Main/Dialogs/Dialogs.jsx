import React from 'react';
import { Route } from 'react-router-dom';
import styles from './dialogs.module.css'
import DialogsList from './DialogsList/DialogsList';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <DialogsList
        dispatch={props.dispatch}
      />
      <Route path="/dialogs/messages" component={() => (
        <Messages
          userName='Ann'
          dispatch={props.dispatch}
        />
      )}>
      </Route>
    </div>
  );
}
export default Dialogs;
