import React from "react";
import postlist from "./postlist.module.css";
import avatar1 from "../../Profile/avatar1.jpg";
import avatar2 from "../../Profile/avatar2.jpg";
import avatar3 from "../../Profile/avatar3.jpg";

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

let a = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          non culpa delectus a ea distinctio officia labore, atque sed
          voluptatem. Tempora, iste quasi! Neque, veritatis expedita. Obcaecati
          molestias eaque animi.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          non culpa delectus a ea distinctio officia labore, atque sed
          voluptatem. Tempora, iste quasi! Neque, veritatis expedita. Obcaecati
          molestias eaque animi.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          non culpa delectus a ea distinctio officia labore, atque sed
          voluptatem. Tempora, iste quasi! Neque, veritatis expedita. Obcaecati
          molestias eaque animi.`;

let b = `You disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. `;

const posts = {
  one: 'What\'s up guys?',
  two: a,
  three: b,
  four: 'I\'m new here. It is my first post. Does anyone wanna hang out?',
};

const avatars = {
  one : avatar1,
  two : avatar2,
  three : avatar3,
}

const PostList = () => {
  return (
    <div className={postlist.posts}>
      <h2 className={postlist.title}>current posts</h2>
      <PostItem avatar={avatars.one} text={posts.one} time="35 mintes ago" authorName='Sasha' />
      <PostItem avatar={avatars.three} text={posts.two} time="1 hour ago" authorName='Ann' />
      <PostItem avatar={avatars.two} text={posts.three} time="8 hours ago" authorName='Vitaliy' />
      <PostItem avatar={avatars.one} text={posts.four} time="yesterday" authorName='Sasha' />
    </div>
  );
};

export default PostList;
