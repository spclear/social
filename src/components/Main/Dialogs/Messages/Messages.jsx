import React from 'react';
import styles from './messages.module.css';
import MessagesBodyContainer from './MessagesBody/MessagesBodyContainer';
import CreateMessageContainer from './CreateMessage/CreateMessageContainer';

const Messages = (props) => {
  let userName
  (props.currentDialog)
    ? userName = props.getName(props.currentDialog)
    : userName = '';
  if (userName !== '') {
    return (
      <div className={styles.messages}>
        <h4 className={styles.title}>
          {userName}
        </h4>
        <MessagesBodyContainer />
        <CreateMessageContainer />
      </div>
    );
  }
  return <div></div>
}

export default Messages;
