import React from 'react';
import styles from './postcreate.module.css';
import { reduxForm, reset } from 'redux-form';
import PostForm from './PostForm';

const AddPostForm = reduxForm({ form: 'addPostForm' })(PostForm);

const PostCreate = (props) => {
  const addNewPost = (formData) => {
    props.addPost(formData.postText);
    props.reset('addPostForm');
  }

  return (
    <div className={styles.createPost}>
      <h2 className={styles.title}>What's new?</h2>
      <AddPostForm onSubmit={addNewPost}/>
    </div>
  )
}

export default PostCreate;