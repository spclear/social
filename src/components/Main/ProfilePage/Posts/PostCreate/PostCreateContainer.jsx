import React from 'react';
import PostCreate from './PostCreate';
import { addPostActionCreator, updatePostInputActionCreator }
  from '../../../../../redux/redux-store';

const PostCreateContainer = (props) => {
  const state = props.store.getState();
  const value = state.profilePage.currentPostField;

  const update = (value) => {
    props.store.dispatch(updatePostInputActionCreator(value));
  }
  const addPost = () => {
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