import React from 'react';
import styles from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from '../../../common/Preloader/Preloader';
import UserDefault from '../../../../assets/images/UserDefault.png'
import ProfileStatus from './ProfileStatus/ProfileStatus';

const Profile = (props) => {
  const info = props.currentUserInfo;
  if (!info || props.isLoading) {
    return (
      <Preloader extraClass={styles.preloader}/>
    )
  }
  return (
    <div className={styles.profile}>
      <a className={styles.avatar} href="/">
        <img
          src={info.photos.large || UserDefault}
          className="avatar"
          alt='avatar'
        />
      </a>
      <div className={styles.details}>
        <h3 className={styles.userName}>
          <a href="/">{info.fullName}</a>
        </h3>
        <ProfileStatus
          status={props.currentUserStatus}
          updateStatus={props.updateCurrentUserStatus}
        />
        <ProfileInfo info={info}/>
      </div>
    </div>
  )
}

export default Profile;