import React from 'react';
import styles from './dialogslist.module.css';
import DialogsItem from './DialogsItem/DialogsItem';

function returnLastMessage(obj) {
  let lastMsg = obj.messagesHistory[0].text;
  return (lastMsg.length > 35)
    ? lastMsg.slice(0, 35) + '...'
    : lastMsg;
}

const DialogsList = (props) => {
  let dialogsList = props.dialogs;
  
  let dialogs = dialogsList.map(dialog => (
    <DialogsItem
      key={dialog.userId}
      userId={dialog.userId}
      name={props.getName(dialog.userId)}
      avatar={props.getAvatar(dialog.userId)}
      lastMessage={returnLastMessage(dialog)}
    />
  ))

  return (
    <div className={styles.dialogs}>
      <h3 className={styles.title}>Recent dialogs</h3>
      {dialogs}
    </div>
  )
}

export default DialogsList;