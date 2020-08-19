import React from 'react';
import styles from './preloader.module.css';

const Preloader = (props) => {
  return (
    <div className={`${styles.loaderContainer} ${props.extraClass}`}>
      <div class={styles.loader}>
        <div></div>
      </div>
    </div>
  )
}

export default Preloader;