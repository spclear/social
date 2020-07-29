import React from 'react';
import styles from './profilepage.module.css';
import Profile from './Profile/Profile';
import PostCreate from './Posts/PostCreate/PostCreate';
import PostList from './Posts/PostList/PostList';

const ProfilePage = () => {
  return (
    <div className="profilepage">
      <Profile />
      <PostCreate />
      <PostList />
    </div>
  )
}

export default ProfilePage;