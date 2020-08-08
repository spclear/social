import React from 'react';
import styles from './friendsbar.module.css';
import FriendItem from './FriendItem/FriendItem';

const FriendsBar = (props) => {
  const friendsList = props.friendsList;

  const getName = (id) => {
    return props.getName(id);
  }
  const getAvatar = (id) => {
    return props.getAvatar(id);
  }

  return (
    <div className={styles.friendsBar}>
      <h3 className={styles.title}>Friends</h3>
      <div className={styles.items}>
        {
          friendsList.map(item => (
            <FriendItem
              name={getName(item.userId)}
              image={getAvatar(item.userId)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default FriendsBar