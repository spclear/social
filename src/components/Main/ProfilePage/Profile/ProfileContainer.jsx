import React from 'react';
import Profile from './Profile';

const ProfileContainer = (props) => {
  let currentUserId = "641006348";

  const state = props.store.getState();
  const name = state.profilePage.getFullName(currentUserId);
  const avatar = state.profilePage.getAvatar(currentUserId);

  return (
    <Profile
      name={name}
      avatar={avatar}
    />
  )
}

export default ProfileContainer;