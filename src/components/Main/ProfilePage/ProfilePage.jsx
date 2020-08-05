import React from 'react';
import Profile from './Profile/Profile';
import PostCreate from './Posts/PostCreate/PostCreate';
import PostList from './Posts/PostList/PostList';

const ProfilePage = (props) => {
  return (
    <div className="profilepage">
      <Profile
        dispatch={props.dispatch}
      />
      <PostCreate
        dispatch={props.dispatch}
      />  
      <PostList
        dispatch={props.dispatch}
      />
    </div>
  )
}

export default ProfilePage;