import React from 'react';
import styles from './header.module.css';
import LogButton from '../common/LogButton/LogButton';

const HeaderSignOut = (props) => {
  return (
    <div>
      <span className={styles.username}>
        {props.name}
      </span>
      <LogButton
        buttonName="Sign out"
        to='/login'
        additionalClass={styles.button}
        onClick={props.onClick}
      />
    </div>
  )
}
const HeaderSignIn = () => {
  return (
    <LogButton
      buttonName="Sign in"
      to='/login'
      additionalClass={styles.button}
    />
  )
}

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <a href='/profile' className={styles.logo}></a>
        <a href='/profile' className={styles.name}>Socia.L</a>
      </div>
      {(props.isLoggedIn && props.userDetails)
        ? <HeaderSignOut
            onClick={props.logout}
            name={props.userDetails.login || ''}
          />
        : <HeaderSignIn/>}
    </header>
  )
}

export default Header;