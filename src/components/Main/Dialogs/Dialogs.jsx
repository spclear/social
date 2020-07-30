import React from 'react';
import styles from './dialogs.module.css'
import DialogsList from './DialogsList/DialogsList';
import Messages from './Messages/Messages';
import SettingsBar from './SettingsBar/SettingsBar';

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <DialogsList />
      <Messages userName='Victoriagi'/>
    </div>
  )
}
export default Dialogs;
