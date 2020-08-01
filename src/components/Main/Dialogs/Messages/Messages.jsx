import React from 'react';
import { Route } from 'react-router-dom';
import styles from './messages.module.css';
import Button from '../../../Button/Button';

const CreateMessage = () => {
  let newMessage = React.createRef();

  let alertMessageTest = () => {
    let msgText = newMessage.current.textContent;
    alert(msgText);
  }

  return (
    <div className={styles.newMessage}>
      <p ref={newMessage} className={styles.typeMessage} contentEditable="true"></p>
      <Button onClick={alertMessageTest} addClass={styles.button} btnName='Send' />
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
  let currAvatar = props.dialog[1].avatar;
  let messagesList = props.dialog[1].messagesHistory.map((message) => (
    <MessageItem
      avatar={currAvatar}
      text={message.text}
      key={message.time}
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
      <MessagesBody messages={props.messages} dialog={props.dialog}/>
      <CreateMessage />
    </div>
  );
}

export default Messages;