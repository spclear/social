import React from 'react';
import ProfileContainer from './Profile/ProfileContainer';
import PostCreateContainer from './Posts/PostCreate/PostCreateContainer'
import PostListContainer from './Posts/PostList/PostListContainer';

const ProfilePage = (props) => {
  return (
    <div className="profilepage">
      <ProfileContainer store={props.store} />
      <PostCreateContainer store={props.store} />  
      <PostListContainer store={props.store} />
    </div>
  )
}

export default ProfilePage;