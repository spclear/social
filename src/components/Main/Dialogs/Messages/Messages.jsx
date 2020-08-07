import React from 'react';
import styles from './messages.module.css';
import CreateMessage from './CreateMessage/CreateMessage';
import MessagesBody from './MessagesBody/MessagesBody';

const Messages = (props) => {
  
  return (
    <div className={styles.messages}>
      <h4 className={styles.title}>
        {props.userName}
      </h4>
      <MessagesBody
        dispatch={props.dispatch}
        userId={props.userId}
      />
      <CreateMessage
        dispatch={props.dispatch}
        userId={props.userId}
        idSelf={props.idSelf}
      />
    </div>
  );
}

export default Messages;
