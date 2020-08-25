import React from 'react';
import ProfileContainer from './Profile/ProfileContainer';
import PostCreateContainer from './Posts/PostCreate/PostCreateContainer'
import PostListContainer from './Posts/PostList/PostListContainer';
import Separator from '../../common/Separator/Separator'
import { Redirect } from 'react-router-dom';

const ProfilePage = (props) => {
  if (!props.isAuth) {
    return <Redirect to='/login'/>
  }
  
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