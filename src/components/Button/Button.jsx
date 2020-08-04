import React from 'react';
import styles from './button.module.css';

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={`${styles.createButton} ${props.addClass}`}>
      {props.btnName}
    </button>
  )
}

export default Button;