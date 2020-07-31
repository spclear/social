import React from 'react';
import { Route } from 'react-router-dom';
import styles from './dialogs.module.css'
import DialogsList from './DialogsList/DialogsList';
import Messages from './Messages/Messages';
import SettingsBar from './SettingsBar/SettingsBar';

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <DialogsList dialogs={props.dialogsData.dialogsData} />
      <Route path="/dialogs/messages" component={() => (
        <Messages
          userName='Victoria'
          messages={props.dialogsData.dialogsData} />
      )}>
      </Route>
    </div>
  );
}
export default Dialogs;
