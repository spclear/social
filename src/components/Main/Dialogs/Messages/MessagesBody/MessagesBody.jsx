import React from 'react';
import styles from './messagesbody.module.css';
import MessageItem from './MessageItem/MessageItem';
import { getAvatarActionCreator, getStateActionCreator, getDialogActionCreator }
  from '../../../../../redux/store';
import ScrollToBottom from 'react-scroll-to-bottom';

const MessagesBody = (props) => {
  const idSelf = "641006348";
  let dialogs = props.dispatch(getDialogActionCreator(props.userId));

  const selfMessage = (id) => {
    if (id === idSelf) {
      return styles.selfMessage;
    }
  }


  let messagesList = dialogs.messagesHistory.map((message) => (
    <MessageItem
      selfMessage={selfMessage(message.id)}
      avatar={props.dispatch(getAvatarActionCreator(message.id))}
      text={message.text}
      key={message.time}
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