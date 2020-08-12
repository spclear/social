import React from 'react';
import styles from './messages.module.css';
import MessagesBodyContainer from './MessagesBody/MessagesBodyContainer';
import CreateMessageContainer from './CreateMessage/CreateMessageContainer';

const Messages = (props) => {
  const userName = props.userName;

  return (
    <div className={styles.messages}>
      <h4 className={styles.title}>
        {userName}
      </h4>
      <MessagesBodyContainer
        userId={props.userId}
      />
      <CreateMessageContainer
        userId={props.userId}
      />
    </div>
  );
}

export default Messages;
