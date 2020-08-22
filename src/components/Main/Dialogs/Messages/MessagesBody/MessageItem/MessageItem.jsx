import React from 'react';
import styles from './messageitem.module.css';
import { NavLink } from 'react-router-dom';

const MessageItem = (props) => {
  let messageItem = React.createRef(); 

  return (
    <div ref={messageItem} className={`${styles.message} ${props.isSelfMessage}`}>
      <div className={styles.avatar}>
        <NavLink to='/profile'>
          <img src={props.avatar} alt='' />
        </NavLink>
      </div>
      <p className={styles.item}>{props.text}</p>
    </div>
  )
};

export default MessageItem;