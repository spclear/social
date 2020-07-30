import React from 'react';
import { Route } from 'react-router-dom';
import styles from './dialogs.module.css'
import DialogsList from './DialogsList/DialogsList';
import Messages from './Messages/Messages';
import SettingsBar from './SettingsBar/SettingsBar';

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <DialogsList dialogs={props.dialogsData.dialogs} />
      <Route path="/dialogs/messages" component={() => (
        <Messages
          userName='Victoria'
          messages={props.dialogsData.dialogs} />
      )}>
      </Route>
    </div>
  );
}
export default Dialogs;
