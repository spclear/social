import React from 'react';
import styles from './dialogslist.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import dialogsData from './dialogsdata';

const DialogsList = () => {
  let dialogs = dialogsData.map(dialog => (
    <DialogsItem key={dialog.userId}
        userName={dialog.userName}
        lastMessage={dialog.lastMessage}
        avatar={dialog.avatar}
        dialogId={dialog.userId}
    />
  ))

  return (
    <div className={styles.dialogs}>
      <h3 className={styles.title}>Recent dialogs</h3>
      {dialogs}
    </div>
  );
}

export default DialogsList;