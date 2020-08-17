import React from 'react';
import styles from './preloader.module.css';

const Preloader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div class={styles.loader}>
        <div></div>
      </div>
    </div>
  )
}

export default Preloader;