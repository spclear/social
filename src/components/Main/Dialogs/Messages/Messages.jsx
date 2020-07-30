import React from 'react';
import styles from './messages.module.css';
import Button from '../../../Button/Button';

const Messages = (props) => {
  return (
    <div className={styles.messages}>
      <h4 className={styles.title}>{props.userName}</h4>
      <div className={styles.messagesBody}>
        <div className={styles.messagesList}>
          <p className={styles.item}>13123123</p>
          <p className={styles.item}>2131231232131231sdf2321 31 23123</p>
          <p className={styles.item}>313123123</p>
          <p className={styles.item}>413123123</p>
          <p className={styles.item}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam accusamus consequuntur quam facere harum! Sit id cupiditate debitis facilis asperiores deserunt officiis eveniet, cum facere, optio voluptas perferendis corrupti incidunt!</p>
        </div>
        <div className={styles.newMessage}>
          <p className={styles.typeMessage} contentEditable="true"></p>
          <Button
            addClass={styles.button}
            btnName='Send'
          />
        </div>
      </div>
    </div>
  );
}

export default Messages;