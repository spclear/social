import React from "react";
import PostList from "./PostList";

const PostListContainer = (props) => {
  const state = props.store.getState();
  const posts = state.profilePage.postsList;
  
  const getName = state.profilePage.getName.bind(state.profilePage);
  const getAvatar = state.profilePage.getAvatar.bind(state.profilePage);

  return (
    <PostList
      posts={posts}
      getName={getName}
      getAvatar={getAvatar}
    />
  )
}

export default PostListContainer