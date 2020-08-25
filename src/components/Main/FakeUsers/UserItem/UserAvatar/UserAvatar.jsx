import React from 'react';
import styles from './useravatar.module.css';

const UserAvatar = (props) => {
  return (
    <div className={styles.avatar}>
      <img src={props.avatar} alt="avatar" />
    </div>
  )
}

export default UserAvatar;