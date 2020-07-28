import React from 'react';
import main from './main.module.css';
import Profile from './Profile/Profile';
import PostCreate from './Posts/PostCreate/PostCreate';
import PostList from './Posts/PostList/PostList';

const Main = () => {
  return (
    <main className={main.main}>
      <Profile />
      <PostCreate />
      <PostList />
    </main>
  );
}

export default Main;