import React from 'react';
import profile from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  const currentUserId = "641006348";
  
  let avatar = props.store.getAvatar(currentUserId);
  let userName = props.store.getFullName(currentUserId);

  return (
    <div className={profile.profile}>
      <a className={profile.avatar} href="/">
        <img className="avatar" src={avatar} alt='' />
      </a>
      <div className={profile.details}>
        <h3 className={profile.userName}>
          <a href="/">{userName}</a>
        </h3>
        <ProfileInfo />
      </div>
    </div>
  );
}

export default Profile;