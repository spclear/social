import React from 'react';
import Profile from './Profile/Profile';
import PostCreate from './Posts/PostCreate/PostCreate';
import PostList from './Posts/PostList/PostList';

const ProfilePage = (props) => {
  return (
    <div className="profilepage">
      <Profile profile={props.profile} />
      <PostCreate
        addPost={props.addPost}
        updInput={props.updInput}
        currText={props.currText}
      />  
      <PostList
        posts={props.posts}
      />
    </div>
  )
}

export default ProfilePage;