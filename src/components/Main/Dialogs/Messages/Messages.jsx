import React from 'react';
import { Route } from 'react-router-dom';
import styles from './messages.module.css';
import Button from '../../../Button/Button';


const MessageItem = (props) => {
  return (
    <p className={styles.item}>{props.text}</p>
  )
}

const Messages = (props) => {
  let messagesList = props.messages[0].messagesList.map((message) => (
    <MessageItem
      text={message.text}
      key={message.id}
    />
  ));

  return (
    <div className={styles.messages}>
      <h4 className={styles.title}>{props.userName}</h4>
      <div className={styles.messagesBody}>
        <div className={styles.messagesList}>
          {messagesList}
        </div>
        <div className={styles.newMessage}>
          <p className={styles.typeMessage} contentEditable="true"></p>
          <Button addClass={styles.button} btnName='Send'/>
        </div>
      </div>
    </div>
  );
}

export default Messages;