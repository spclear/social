import React from 'react';
import styles from './postcreate.module.css';
import Button from '../../../../common/Button/Button';
import { Field } from 'redux-form';

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder='Share what you want...'
        name='postText'
        className={styles.newText}
        component='textarea'
      />
      <Button
        addClass={styles.button}
        buttonName='Post'
      />
    </form>
  )
}

export default PostForm;