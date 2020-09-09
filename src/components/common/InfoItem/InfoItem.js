import React from 'react';
import styles from './infoitem.module.css';

const InfoItem = (props) => {
  if (props.data) {
    return (
    <div className={styles.item}>
      {props.info}
      <span className={styles.data}>
        {props.data}
      </span>
    </div>
    )
  }
  
  return <></>
}

export default InfoItem;