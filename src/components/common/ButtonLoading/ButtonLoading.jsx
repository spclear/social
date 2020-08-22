import React from 'react';
import styles from './buttonloading.module.css';

const ButtonLoading = (props) => {
  return (
    <div className={styles.loading}>
      <div
        style={{ backgroundColor: props.backgroundColor }} 
        className={styles.loadingItem}
      />
      <div
        style={{ backgroundColor: props.backgroundColor }} 
        className={styles.loadingItem}
      />
      <div
        style={{ backgroundColor: props.backgroundColor }} 
        className={styles.loadingItem}
      />
      <div
        style={{ backgroundColor: props.backgroundColor }} 
        className={styles.loadingItem}
      />
      <div
        style={{ backgroundColor: props.backgroundColor }} 
        className={styles.loadingItem}
      />
    </div>
  )
}

export default ButtonLoading;