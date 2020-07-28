import React from 'react';
import create from './postcreate.module.css';

const PostCreate = () => {
  return (
    <div className={create.createPost}>
      <h2 className={create.title}>What's new?</h2>
      <p contentEditable='true' className={create.newText} />
      <button className={create.createButton}>Send</button>
    </div>
  )
}

export default PostCreate;