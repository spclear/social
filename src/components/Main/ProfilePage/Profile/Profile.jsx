import React from 'react';
import styles from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from '../../../common/Preloader/Preloader';
import UserDefault from '../../../../assets/images/UserDefault.png'
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { NavLink } from 'react-router-dom';

const Profile = (props) => {
  const info = props.currentUserInfo;
  const isOwner = props.authorizedUser === props.shownUser;

  if (!info || props.isLoading) {
    return (
      <Preloader extraClass={styles.preloader}/>
    )
  }



  return (
    <div className={styles.profile}>
      <div className={styles.avatar} href="/">
        <img
          src={info.photos.large || UserDefault}
          className="avatar"
          alt='avatar'
        />
        {isOwner &&
          <NavLink to='/settings'>
            <div className={styles.updateProfile}>
              Update profile
            </div>
          </NavLink>
        }
      </div>
      <div className={styles.details}>
        <h3 className={styles.userName}>
          {info.fullName}
        </h3>
        <ProfileStatus
          isOwner={isOwner}
          status={props.currentUserStatus}
          updateStatus={props.updateCurrentUserStatus}
        />
        <ProfileInfo info={info}/>
      </div>
    </div>
  )
}

export default Profile;