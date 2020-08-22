import React from 'react';
import styles from './frienditem.module.css';
import { NavLink } from 'react-router-dom';

const FriendItem = (props) => {
  return (
    <NavLink to="/profile" className={styles.item}>
      <div className={styles.avatar}>
        <img src={props.image} alt='img'/>
      </div>
      <div className={styles.name}>
        {props.name}
      </div>
    </NavLink>
  )
}

export default FriendItem;