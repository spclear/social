import React from 'react';
import styles from './header.module.css';
import LoginButton from '../common/LoginButton/LoginButton';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <a href='/profile' className={styles.logo}></a>
        <a href='/profile' className={styles.name}>Socia.L</a>
      </div>
      {props.isLoggedIn ? `${props.userDetails.login}` : <LoginButton />}
    </header>
  )
}

export default Header;