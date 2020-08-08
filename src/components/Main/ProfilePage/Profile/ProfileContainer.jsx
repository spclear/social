import React from 'react';
import Profile from './Profile';

const ProfileContainer = (props) => {
  let currentUserId = "641006348";
  let name = props.store.getFullName(currentUserId);
  let avatar = props.store.getAvatar(currentUserId);

  return (
    <Profile
      name={name}
      avatar={avatar}
    />
  )
}

export default ProfileContainer;