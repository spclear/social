import React from 'react';
import styles from './infoitem.module.css';

const InfoItem = (props) => {
  return (
    <li className={styles.item}>
      {props.info}
      <span className={styles.data}>
        {props.data}
      </span>
    </li>
  )
}

export default InfoItem;