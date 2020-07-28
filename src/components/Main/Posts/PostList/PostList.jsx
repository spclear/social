import React from "react";
import postlist from "./postlist.module.css";
import avatar from "../../Profile/avatar.jpg";

const PostItem = () => {
  return (
    <div className={postlist.postItem}>
      <div className={postlist.author}>
        <div className={postlist.authorAvatar}>
          <img className="avatar" src={avatar} alt="user avatar" />
        </div>
        <div className={postlist.details}>
          <h3 className={postlist.name}>Sasha</h3>
          <p className={postlist.time}>35 mintes ago</p>
        </div>
      </div>
      <p className={postlist.body}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          non culpa delectus a ea distinctio officia labore, atque sed
          voluptatem. Tempora, iste quasi! Neque, veritatis expedita. Obcaecati
          molestias eaque animi.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          non culpa delectus a ea distinctio officia labore, atque sed
          voluptatem. Tempora, iste quasi! Neque, veritatis expedita. Obcaecati
          molestias eaque animi.
        </p>
      </p>
    </div>
  );
};

const PostList = () => {
  return (
    <div className={postlist.posts}>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
};

export default PostList;
