import React from 'react';
import profile from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import avatar from './avatar1.jpg';

const Profile = () => {
  return (
    <div className={profile.profile}>
      <a className={profile.avatar} href="/">
        <img className="avatar" src={avatar} />
      </a>
      <div className={profile.details}>
        <h3 className={profile.userName}>
          <a href="/">Sasha Plotnikov</a>
        </h3>
        <ProfileInfo />
      </div>
    </div>
  );
}

export default Profile;