import React from "react";
import styles from "./postlist.module.css";
import PostItem from "./PostItem/PostItem";

const PostList = (props) => {
  const posts = [...props.posts].reverse();

  const postsList = posts.map((post) => (
    <PostItem
      key={post.postId}
      authorName={props.getName(post.authorId)}
      authorAvatar={props.getAvatar(post.authorId)}
      time={post.time}
      text={post.text}
    />
  ));
  
  return (
    <div className={styles.posts}>
      <h2 className={styles.title}>current posts</h2>
      {postsList}
    </div>
  )
}

export default PostList;
