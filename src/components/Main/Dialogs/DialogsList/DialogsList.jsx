import React from 'react';
import styles from './dialogslist.module.css';
import DialogsItem from './DialogsItem/DialogsItem';

function returnLastMessage(array) {
  let lastMessage = array[array.length - 1].text;
  // debugger
  return (lastMessage.length > 30)
    ? lastMessage.slice(0, 30) + '...'
    : lastMessage;
}

const DialogsList = (props) => {
  let dialogsList = props.dialogs;
  let dialogs = dialogsList.map(item => (
    <DialogsItem
      onClick={props.setCurrentDialogId}
      key={item.userId}
      userId={item.userId}
      name={props.getName(item.userId)}
      avatar={props.getAvatar(item.userId)}
      lastMessage={returnLastMessage(item.messagesHistory)}
    />
  ))

  return (
    <div className={styles.dialogs}>
      <h3 className={styles.title}>
        Recent dialogs
      </h3>
      {dialogs}
    </div>
  )
}

export default DialogsList;