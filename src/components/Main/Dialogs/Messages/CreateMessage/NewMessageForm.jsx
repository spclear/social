import React from 'react';
import styles from './createmessage.module.css';
import { Field } from 'redux-form';
import Button from '../../../../common/Button/Button';

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder='Type your message...'
        name='messageText'
        className={styles.messageField}
        component='textarea'
      />
      <Button
        addClass={styles.button}
        buttonName='Send'
      />
    </form>
  )
}

export default PostForm;