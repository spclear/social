import React from 'react';
import styles from './button.module.css';

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.createButton} ${props.addClass}`}
      disabled={props.isDisabled}
    >
      {props.buttonName}
    </button>
  )
}

export default Button;