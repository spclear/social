import React from 'react';
import styles from './logbutton.module.css';
import { NavLink } from 'react-router-dom';

const LogButton = (props) => {
  return (
    <NavLink to={props.to || ''}>
      <button
        className={styles.button + ' ' + props.additionalClass}
        onClick={props.onClick}
      >
        {props.buttonName}
      </button>
    </NavLink>
  )
}

export default LogButton;