import React from 'react';
import styles from './frienditem.module.css';

const FriendItem = (props) => {
  return (
    <a href='#' className={styles.item}>
      <div className={styles.avatar}>
        <img src={props.image} />
      </div>
      <div className={styles.name}>
        {props.name}
      </div>
    </a>
  )
}

export default FriendItem;