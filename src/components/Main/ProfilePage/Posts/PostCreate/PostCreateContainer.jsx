import React from 'react';
import PostCreate from './PostCreate';
import { addPostActionCreator, updatePostInputActionCreator }
  from '../../../../../redux/store';

const PostCreateContainer = (props) => {
  const state = props.store.getState();
  const value = state.profilePage.currentPostField;

  const update = (value) => {
    props.store.dispatch(updatePostInputActionCreator(value));
    console.log(value);
  }
  const addPost = () => {
    console.log(value);
    props.store.dispatch(addPostActionCreator());
  }

  return (
    <PostCreate
      value={value}
      update={update}
      addPost={addPost}
    />
  )
}

export default PostCreateContainer;