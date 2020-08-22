import React from 'react';
import styles from './followbutton.module.css';
import ButtonLoading from '../../../../common/ButtonLoading/ButtonLoading';

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
      disabled={props.disabled}
    >
      {
        (props.disabled)
          ? <ButtonLoading backgroundColor='#353b48'/>
          : buttonName(props.isFollowed)
      }
    </button>
  )
}

export default FollowButton