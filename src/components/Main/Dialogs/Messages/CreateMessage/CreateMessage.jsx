import React from 'react';
import styles from './createmessage.module.css';
import { reduxForm } from 'redux-form';
import NewMessageForm from './NewMessageForm';

const SendMessageForm = reduxForm({ form: 'sendMessageForm' })(NewMessageForm);

const CreateMessage = (props) => {  
  let sendMessage = (formData) => {
    props.sendMessage(formData.messageText);
  }

  return (
    <div className={styles.newMessage}>
      <SendMessageForm onSubmit={sendMessage}/>
    </div>
  )
};

export default CreateMessage;