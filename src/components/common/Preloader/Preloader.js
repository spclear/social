import React from 'react';
import styles from './preloader.module.css';

const Preloader = (props) => {
  return (
    <div className={`${styles.loaderContainer} ${props.extraClass}`}>
      <div className={styles.loader}>
        <div></div>
      </div>
    </div>
  )
}

export default Preloader;