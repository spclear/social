import React from 'react';
import styles from './postitem.module.css';

const PostItem = (props) => {
  return (
    <div className={styles.postItem}>
      <div className={styles.author}>
        <div className={styles.authorAvatar}>
          <img className="avatar" src={props.authorAvatar} alt="user avatar" />
        </div>
        <div className={styles.details}>
          <h3 className={styles.name}>{props.authorName}</h3>
          <p className={styles.time}>{props.time}</p>
        </div>
      </div>
      <div className={styles.body}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default PostItem;