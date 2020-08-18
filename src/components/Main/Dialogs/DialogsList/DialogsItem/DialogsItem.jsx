import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './dialogsitem.module.css';

const DialogsItem = (props) => {
  return (
    <NavLink
      to={`/dialogs/messages/id=${props.userId}`}
      activeClassName={styles.active}
      className={styles.item}
      onClick={() => props.onClick(props.userId)}
    >
      <div className={styles.user}>
        <img
          className={styles.userAvatar}
          src={props.avatar} alt=''
        />
      </div>
      <h4 className={styles.userName}>
        {props.name}
      </h4>
      <p className={styles.lastMessage}>
        {props.lastMessage}
      </p>
    </NavLink>
  )
}

export default DialogsItem;