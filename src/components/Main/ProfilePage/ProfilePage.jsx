import React from 'react';
import ProfileContainer from './Profile/ProfileContainer';
import PostCreateContainer from './Posts/PostCreate/PostCreateContainer'
import PostListContainer from './Posts/PostList/PostListContainer';
import Separator from '../../common/Separator/Separator';

const ProfilePage = (props) => {
  return (
    <div className="profilepage">
      <ProfileContainer />
      <Separator />
      <PostCreateContainer />  
      <PostListContainer />
    </div>
  )
}

export default ProfilePage;