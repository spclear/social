import React from 'react';
import styles from './dialogslist.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import { getStateActionCreator, getNameActionCreator, getAvatarActionCreator }
  from '../../../../redux/store';

function returnLastMessage(obj) {
  let lastMsg = obj.messagesHistory[0].text;

  if (lastMsg.length > 35) return lastMsg.slice(0, 35) + '...'
  return lastMsg.slice(0, 35);
}

const DialogsList = (props) => {
  let dialogsList = props.dispatch(getStateActionCreator()).usersDialogs;
  
  let dialogs = dialogsList.map(dialog => (
    <DialogsItem
      key={dialog.userId}
      userId={dialog.userId}
      userName={props.dispatch(getNameActionCreator(dialog.userId))}
      avatar={props.dispatch(getAvatarActionCreator(dialog.userId))}
      lastMessage={returnLastMessage(dialog)}
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