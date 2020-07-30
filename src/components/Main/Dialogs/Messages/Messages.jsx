import React from 'react';
import { Route } from 'react-router-dom';
import styles from './messages.module.css';
import Button from '../../../Button/Button';

const messagesData = [
  { id: 1, text: "Hello there" },
  { id: 2, text: "hi" },
  { id: 3, text: "Obi wan kenobi?" },
  { id: 4, text: "ahahahahahh" },
  { id: 5, text: "Ye, sure. Cool meme tho" },
  { id: 6, text: "yesss" },
  { id: 7, text: "Anyway. We need to talk" },
  { id: 8, text: "Do you have time right now? If yes, call me please" },
];

const MessageItem = (props) => {
  return (
    <p className={styles.item}>{props.text}</p>
  )
}

const Messages = (props) => {
  let messagesList = messagesData.map((message) => (
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