import React from 'react';
import styles from './dialogslist.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import avatar1 from './avatar4.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.jpg';

const DialogsList = () => {
  return (
    <div className={styles.dialogs}>
      <h3 className={styles.title}>Recent dialogs</h3>
      <DialogsItem
        userName="Victoria"
        lastMessage="Hi? What's up?"
        avatar={avatar1}
        dialogId="987343516"
      />
      <DialogsItem
        userName="Vitaliy"
        lastMessage="I need your help. I've read about that thing. . ."
        avatar={avatar2}
        dialogId="184760497"
      />
      <DialogsItem
        userName="Ann"
        lastMessage="Lorem, ipsum dolor sit amet consectetur . . ."
        avatar={avatar3}
        dialogId="084926135"
      />
    </div>
  );
}

export default DialogsList;