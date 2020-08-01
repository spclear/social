import React from 'react';
import profile from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  const currentUserId = "641006348";
  let avatar, userName;

  for (let i = 0; i < props.profile.length; i++) {
    if (currentUserId == props.profile[i].ID) {
      avatar = props.profile[i].avatar;
      userName = props.profile[i].firstName + ' ' + props.profile[i].lastName;
    }
  }

  return (
    <div className={profile.profile}>
      <a className={profile.avatar} href="/">
        <img className="avatar" src={avatar} />
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