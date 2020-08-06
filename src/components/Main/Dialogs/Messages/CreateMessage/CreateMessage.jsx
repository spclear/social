import React from 'react';
import styles from './createmessage.module.css';
import Button from '../../../../Button/Button';
import { updateMessageInputActionCreator, getStateActionCreator, sendMessageActionCreator }
  from '../../../../../redux/store';


const CreateMessage = (props) => {
  let newMessage = React.createRef();
  const idSelf = "641006348";
  const id = props.userId;

  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator(id, idSelf));
  }

  const update = () => {
    props.dispatch(updateMessageInputActionCreator(newMessage.current.value));
  }

  return (
    <div className={styles.newMessage}>
      <textarea
        placeholder='Type your message...'
        onChange={update}
        ref={newMessage}
        className={styles.typeMessage}
        value={props.dispatch(getStateActionCreator()).currentFieldMessage}
      />
      <Button
        onClick={sendMessage}
        addClass={styles.button}
        buttonName='Send'
      />
    </div>
  )
};

export default CreateMessage;