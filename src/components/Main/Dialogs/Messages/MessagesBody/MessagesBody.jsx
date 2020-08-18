import React from 'react';
import styles from './messagesbody.module.css';
import MessageItem from './MessageItem/MessageItem';
import ScrollToBottom from 'react-scroll-to-bottom';

const MessagesBody = (props) => {
  const dialog = props.getDialog(props.currentDialog);
  const messagesHistory = [...dialog].reverse();

  const isSelfMessage = (id, idSelf) => (id === idSelf) ? styles.selfMessage : false;

  let messagesList = messagesHistory.map((message) => (
    <MessageItem
      key={message.time}
      text={message.text}
      avatar={props.getAvatar(message.id)}
      isSelfMessage={isSelfMessage(message.id, props.idSelf)}
    />
  ));

  return (
    <ScrollToBottom className={styles.messagesBody}>
      <div className={styles.messagesList}>
        {messagesList}
      </div>
    </ScrollToBottom>
  )
};

export default MessagesBody;