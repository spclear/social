import React from 'react';
import styles from './infoitem.module.css';

const InfoItem = (props) => {
  return (
    <div className={styles.item}>
      {props.info}
      <span className={styles.data}>
        {props.data || 'Information not specified'}
      </span>
    </div>
  )
}

export default InfoItem;