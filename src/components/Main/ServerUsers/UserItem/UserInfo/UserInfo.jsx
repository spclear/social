import React from 'react';
import styles from './userinfo.module.css';
import FollowButton from '../FollowButton/FollowButton';
import { NavLink } from 'react-router-dom';

const UserInfo = (props) => {
  return (
    <div className={styles.info}>
      <NavLink
        to={`/profile/${props.id}`}
        className={styles.name}
      >
        {props.fullName}
      </NavLink>
      <p className={styles.status}>{props.status}</p>
      <FollowButton
        isFollowed={props.followed}
        onClick={props.onClick}
      />
    </div>
  )
}

export default UserInfo;