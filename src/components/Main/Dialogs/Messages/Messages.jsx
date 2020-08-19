import React from 'react';
import styles from './messages.module.css';
import MessagesBodyContainer from './MessagesBody/MessagesBodyContainer';
import CreateMessageContainer from './CreateMessage/CreateMessageContainer';
import Preloader from '../../../common/Preloader/Preloader';

const Messages = (props) => {
  let userName = (props.currentDialog)
    ? props.getName(props.currentDialog)
    : '';
  
  if (userName) {
    return (
      <div className={styles.messages}>
        <h4 className={styles.title}>
          {userName}
        </h4>
        <MessagesBodyContainer />
        <CreateMessageContainer />
      </div>
    );
  } else {
    return (
      <div className={styles.noDialog}>
        <h4 className={styles.noDialogTitle}>
          Choose a dialog to start...
        </h4>
        <Preloader extraClass={styles.preloader} />
      </div>
    )
  }
}

export default Messages;
