import React from 'react';
import styles from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <a className={styles.avatar} href="/">
        <img className="avatar" src={props.avatar} alt='avatar' />
      </a>
      <div className={styles.details}>
        <h3 className={styles.userName}>
          <a href="/">{props.name}</a>
        </h3>
        <ProfileInfo />
      </div>
    </div>
  )
}

export default Profile;