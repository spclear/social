import React from 'react';
import styles from './createmessage.module.css';
import Button from '../../../../common/Button/Button';


const CreateMessage = (props) => {
  let newMessage = React.createRef();
  
  let sendMessage = () => {
    props.sendMessage();
  }
  const update = () => {
    props.update(newMessage.current.value);
  }

  return (
    <div className={styles.newMessage}>
      <textarea
        className={styles.typeMessage}
        ref={newMessage}
        value={props.value}
        onChange={update}
        placeholder='Type your message...'
      />
      <Button
        isDisabled={props.value === ''}
        onClick={sendMessage}
        addClass={styles.button}
        buttonName='Send'
      />
    </div>
  )
};

export default CreateMessage;