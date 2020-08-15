import React from 'react';
import styles from './useritem.module.css';
import UserAvatar from './UserAvatar/UserAvatar';
import UserInfo from './UserInfo/UserInfo';

const UserItem = (props) => {
  return (
    <div className={styles.item}> 
      <UserAvatar avatar={props.avatar} />
      <UserInfo
        fullName={props.fullName}
        status={props.status}
        followed={props.followed}
        onClick={props.toggleFollow}
      />
    </div>
  )
}

export default UserItem;