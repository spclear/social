import React from 'react';
import styles from './loginbutton.module.css';

const LoginButton = (props) => {
  return (
    <button
      className={styles.loginButton + ' ' + props.additionalClass}
      onClick={props.onClick}
    >
      Login
    </button>
  )
}

export default LoginButton;