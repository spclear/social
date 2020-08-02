import React from 'react';
import styles from './profilepage.module.css';
import Profile from './Profile/Profile';
import PostCreate from './Posts/PostCreate/PostCreate';
import PostList from './Posts/PostList/PostList';

const ProfilePage = (props) => {
  return (
    <div className="profilepage">
      <Profile profile={props.profile} />
      <PostCreate addPost={props.addPost}/>
      <PostList
        posts={props.posts}
      />
    </div>
  )
}

export default ProfilePage;