import React from 'react';
import styles from './friendsbar.module.css';

const FriendItem = (props) => {
  return (
    <a href='#' className={styles.item}>
      <div className={styles.avatar}>
        <img src={props.image}/>
      </div>
      <div className="name">
        {props.name}
      </div>
    </a>
  )
}

const FriendsBar = (props) => {
  console.log(props.friends)
  return (
    <div className={styles.friendsBar}>
      <h3 className={styles.title}>Friends</h3>
      <div className={styles.items}>
        {
          props.friends
            .slice(props.friends.length - 3, props.friends.length)
            .map(item => (
              <FriendItem
                image={item.avatar}
                name={item.name}
              />
            ))
        }
      </div>
    </div>
  )
}

export default FriendsBar