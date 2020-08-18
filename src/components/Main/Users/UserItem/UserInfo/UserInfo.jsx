import React from 'react';
import styles from './userinfo.module.css';
import FollowButton from '../FollowButton/FollowButton';


const UserInfo = (props) => {
  return (
    <div className={styles.info}>
      <h3 className={styles.name}>{props.fullName}</h3>
      <p className={styles.status}>{props.status}</p>
      <p className={styles.location}>
        <div className={styles.country}>
          <span>Country: </span>
          {props.country}
        </div>
        <div className={styles.city}>
          <span>City: </span>
          {props.city}
        </div>
      </p>
      <FollowButton
        isFollowed={props.followed}
        onClick={props.onClick}
      />
    </div>
  )
}

export default UserInfo;