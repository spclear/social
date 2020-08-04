import React from 'react';
import Profile from './Profile/Profile';
import PostCreate from './Posts/PostCreate/PostCreate';
import PostList from './Posts/PostList/PostList';

const ProfilePage = (props) => {
  return (
    <div className="profilepage">
      <Profile store={props.store} />
      <PostCreate store={props.store} />  
      <PostList
        posts={props.store.getState().postsList}
      />
    </div>
  )
}

export default ProfilePage;