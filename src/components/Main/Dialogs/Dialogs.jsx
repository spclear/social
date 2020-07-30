import React from 'react';
import { Route } from 'react-router-dom';
import styles from './dialogs.module.css'
import DialogsList from './DialogsList/DialogsList';
import Messages from './Messages/Messages';
import SettingsBar from './SettingsBar/SettingsBar';

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <DialogsList />
      <Route path="/dialogs/messages" component={() => (
        <Messages userName="Victoria" />
      )}>
      </Route>
    </div>
  );
}
export default Dialogs;
