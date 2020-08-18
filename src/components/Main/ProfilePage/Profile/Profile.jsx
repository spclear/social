import React from 'react';
import styles from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  const info = props.getInfo(props.currentUser);

  return (
    <div className={styles.profile}>
      <a className={styles.avatar} href="/">
        <img className="avatar" src={props.getAvatar(props.currentUser)} alt='avatar' />
      </a>
      <div className={styles.details}>
        <h3 className={styles.userName}>
          <a href="/">{props.getFullName(props.currentUser)}</a>
        </h3>
        <div className={styles.status}>
          {info.status}
        </div>
        <ProfileInfo info={info}/>
      </div>
    </div>
  )
}

export default Profile;