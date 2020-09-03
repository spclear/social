import React from 'react';
import styles from './apploader.module.css';

const AppLoader = () => {
  return (
    <div className={styles.preloader}>
      <h1 className={styles.title}>Loading...</h1>
      <div className={styles.loader}>
      </div>
    </div>
  )
}

export default AppLoader;