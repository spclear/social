import React from "react";
import postlist from "./postlist.module.css";
import postData from "./postlistData";


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
      <p className={postlist.body}>
        <p>{props.text}</p>
      </p>
    </div>
  );
};

const PostList = () => {
  const postsList = postData.map((post) => (
    <PostItem
      key={post.postId}
      avatar={post.authorAvatar}
      text={post.text}
      time={post.time}
      authorName={post.authorName}
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
