import React from 'react';
import styles from './messages.module.css';
import MessagesBodyContainer from './MessagesBody/MessagesBodyContainer';
import CreateMessageContainer from './CreateMessage/CreateMessageContainer';

const Messages = (props) => {
  const userId = '084926135';
  const userName = props.store.getName(userId);

  return (
    <div className={styles.messages}>
      <h4 className={styles.title}>
        {userName}
      </h4>
      <MessagesBodyContainer
        store={props.store}
        userId={userId}
      />
      <CreateMessageContainer
        store={props.store}
        userId={userId}
      />
    </div>
  );
}

export default Messages;
