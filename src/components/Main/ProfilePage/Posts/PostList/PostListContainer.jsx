import React from "react";
import PostList from "./PostList";

const PostListContainer = (props) => {
  const state = props.store.getState();
  const posts = state.profilePage.postsList;
  
  const getName = props.store.getName.bind(props.store);
  const getAvatar = props.store.getAvatar.bind(props.store);

  return (
    <PostList
      posts={posts}
      getName={getName}
      getAvatar={getAvatar}
    />
  )
}

export default PostListContainer