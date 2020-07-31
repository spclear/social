import React from 'react';
import { Route } from 'react-router-dom';
import styles from './messages.module.css';
import Button from '../../../Button/Button';

const CreateMessage = () => {
  return (
    <div className={styles.newMessage}>
      <p className={styles.typeMessage} contentEditable="true"></p>
      <Button addClass={styles.button} btnName='Send' />
    </div>
  )
};

const MessageItem = (props) => {
  return (
    <div className={styles.message}>
      <div className={styles.avatar}>
        <a href='#'>
          <img src={props.avatar} />
          </a>
      </div>
      <p className={styles.item}>{props.text}</p>
    </div>
  )
};

const MessagesBody = (props) => {
  let messagesList = props.messages[0].messagesList.map((message) => (
    <MessageItem
      avatar={props.messages[0].avatar}
      text={message.text}
      key={message.id}
    />
  ));
  return (
    <div className={styles.messagesBody}>
      <div className={styles.messagesList}>
        {messagesList}
      </div>
    </div>
  )
};


const Messages = (props) => {
  return (
    <div className={styles.messages}>
      <h4 className={styles.title}>{props.userName}</h4>
      <MessagesBody messages={props.messages} />
      <CreateMessage />
    </div>
  );
}

export default Messages;