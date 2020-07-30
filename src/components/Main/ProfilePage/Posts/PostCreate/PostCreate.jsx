import React from 'react';
import create from './postcreate.module.css';
import Button from '../../../../Button/Button';

const PostCreate = () => {
  return (
    <div className={create.createPost}>
      <h2 className={create.title}>What's new?</h2>
      <p contentEditable='true' className={create.newText} />
      <Button
        addClass={create.button}
        btnName='Post'
      />
    </div>
  )
}

export default PostCreate;