import React from 'react';
import create from './postcreate.module.css';
import Button from '../../../../Button/Button';

const PostCreate = (props) => {
  let postField = React.createRef();
  
  const addNewPost = () => {
    props.store.addPost(postField.current.value);
  }

  const updateInput = () => {
    props.store.updateCurrPostInput(postField.current.value);
  }

  return (
    <div className={create.createPost}>
      <h2 className={create.title}>What's new?</h2>
      <textarea
        ref={postField}
        className={create.newText}
        onChange={updateInput}
        value={props.store.state.currentFieldText}
      />
      <Button
        addClass={create.button}
        onClick={addNewPost}
        btnName='Post'
      />
    </div>
  )
}

export default PostCreate;