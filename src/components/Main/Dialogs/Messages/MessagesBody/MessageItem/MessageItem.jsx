import React from 'react';
import styles from './messageitem.module.css';

const MessageItem = (props) => {
  let messageItem = React.createRef(); 

  return (
    <div ref={messageItem} className={`${styles.message} ${props.selfMessage}`}>
      <div className={styles.avatar}>
        <a href='#'>
          <img src={props.avatar} alt='' />
        </a>
      </div>
      <p className={styles.item}>{props.text}</p>
    </div>
  )
};

export default MessageItem;