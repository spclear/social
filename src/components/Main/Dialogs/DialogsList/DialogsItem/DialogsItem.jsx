import React from 'react';
import styles from './dialogsitem.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
  return (
    <NavLink to={`/dialogs/messages/id=${props.dialogId}`} activeClassName={styles.active} className={styles.item}>
      <div className={styles.user}>
        <img className={styles.userAvatar} src={props.avatar}/>
      </div>
      <h4 className={styles.userName}>{props.userName}</h4>
      <p className={styles.lastMessage}>{props.lastMessage}</p>
    </NavLink>
  );
}

export default DialogsItem;