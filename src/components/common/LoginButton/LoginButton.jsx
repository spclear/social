import React from 'react';
import styles from './loginbutton.module.css';
import { NavLink } from 'react-router-dom';

const LoginButton = (props) => {
  return (
    <NavLink to='/login'>
      <button
        className={styles.loginButton + ' ' + props.additionalClass}
        onClick={props.onClick}
      >
        Login
      </button>
    </NavLink>
  )
}

export default LoginButton;