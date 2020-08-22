import React from 'react';
import styles from './useravatar.module.css';
import { NavLink } from 'react-router-dom';

const UserAvatar = (props) => {
  return (
    <NavLink
      to={`/profile/${props.id}`}
      className={styles.avatar}
    >
      <img src={props.avatar} alt="avatar" />
    </NavLink>
  )
}

export default UserAvatar;