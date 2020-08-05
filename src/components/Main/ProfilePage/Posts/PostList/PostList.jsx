import React from "react";
import postlist from "./postlist.module.css";


const PostItem = (props) => {
  return (
    <div className={postlist.postItem}>
      <div className={postlist.author}>
        <div className={postlist.authorAvatar}>
          <img className="avatar" src={props.avatar} alt="user avatar" />
        </div>
        <div className={postlist.details}>
          <h3 className={postlist.name}>{props.authorName}</h3>
          <p className={postlist.time}>{props.time}</p>
        </div>
      </div>
      <div className={postlist.body}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

const PostList = (props) => {
  const posts = props.dispatch({ type: "GET-STATE" }).postsList;
  
  const postsList = posts.map((post) => (
    <PostItem
      key={post.postId}
      avatar={post.avatar}
      text={post.text}
      time={post.time}
      authorName={post.name}
    />
  ));
  
  return (
    <div className={postlist.posts}>
      <h2 className={postlist.title}>current posts</h2>
      {postsList}
    </div>
  );
};

export default PostList;
