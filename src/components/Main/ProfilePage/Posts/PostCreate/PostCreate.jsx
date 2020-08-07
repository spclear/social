import React from 'react';
import styles from './postcreate.module.css';
import Button from '../../../../Button/Button';
import { addPostActionCreator, updateInputActionCreator, getStateActionCreator }
  from '../../../../../redux/store';

const PostCreate = (props) => {
  let postField = React.createRef();
  
  const addNewPost = () => {
    props.dispatch(addPostActionCreator());
  }

  const update = () => {
    props.dispatch(updateInputActionCreator(postField.current.value));
  }
  return (
    <div className={styles.createPost}>
      <h2 className={styles.title}>What's new?</h2>
      <textarea
        placeholder='Share what you want...'
        ref={postField}
        className={styles.newText}
        onChange={update}
        value={props.dispatch(getStateActionCreator()).profilePage.currentPostField}
      />
      <Button
        addClass={styles.button}
        onClick={addNewPost}
        buttonName='Post'
      />
    </div>
  )
}

export default PostCreate;