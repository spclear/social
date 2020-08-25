import React from 'react';
import styles from './followbutton.module.css';

const FollowButton = (props) => {
  const followedClass = (isFollowed) => {
    return (isFollowed) ? ` ${styles.followed}` : '';
  }

  const buttonName = (isFollowed) => {
    return (isFollowed) ? 'unfollow' : 'follow'
  }

  return (
    <button
      className={`${styles.followButton}${followedClass(props.isFollowed)}`}
      onClick={props.onClick}
    >
      {buttonName(props.isFollowed)}
    </button>
  )
}

export default FollowButton