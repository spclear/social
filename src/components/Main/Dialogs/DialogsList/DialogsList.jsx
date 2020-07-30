import React from 'react';
import styles from './dialogslist.module.css';
import DialogsItem from './DialogsItem/DialogsItem';

function returnLastMessage(obj) {
  let lastMsg = obj.messagesList[obj.messagesList.length - 1].text;

  if (lastMsg.length > 35) return lastMsg.slice(0, 35) + '...'
  return lastMsg.slice(0, 35);
}

const DialogsList = (props) => {
  let dialogs = props.dialogs.map(dialog => (
    <DialogsItem key={dialog.userId}
      userName={dialog.userName}
      lastMessage={returnLastMessage(props.dialogs[2])}
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