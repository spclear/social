import React from 'react';
import create from './postcreate.module.css';
import Button from '../../../../Button/Button';

const PostCreate = (props) => {
  let postField = React.createRef();
  
  
  const addNewPost = () => {
    props.addPost(postField.current.innerText);
    postField.current.innerText = '';
  }

  return (
    <div className={create.createPost}>
      <h2 className={create.title}>What's new?</h2>
      <p ref={postField} contentEditable='true' className={create.newText} />
      <Button
        addClass={create.button}
        onClick={addNewPost}
        btnName='Post'
      />
    </div>
  )
}

export default PostCreate;