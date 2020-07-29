import React from 'react';
import main from './main.module.css';
import Profile from './Profile/Profile';
import PostCreate from './Posts/PostCreate/PostCreate';
import PostList from './Posts/PostList/PostList';
import Dialogs from './Dialogs/Dialogs';

const Main = () => {
  return (
    <main className={main.main}>
      {/* <Profile />
      <PostCreate />
      <PostList /> */}
      <Dialogs />
    </main>
  );
}

export default Main;