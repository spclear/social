import React from 'react';
import styles from './friendsbar.module.css';
import { getStateActionCreator } from '../../../redux/store';

const FriendItem = (props) => {
  return (
    <a href='#' className={styles.item}>
      <div className={styles.avatar}>
        <img src={props.image}/>
      </div>
      <div className={styles.name}>
        {props.name}
      </div>
    </a>
  )
}

const FriendsBar = (props) => {
  let friendList = props.dispatch(getStateActionCreator()).friends;
  return (
    <div className={styles.friendsBar}>
      <h3 className={styles.title}>Friends</h3>
      <div className={styles.items}>
        {
          friendList.map(item => (
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