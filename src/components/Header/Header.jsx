import React from 'react';
import styles from './header.module.css';


const Header = (props) => {
  return (
    <header className={styles.header}>
      <a href='/index.html' className={styles.logo}></a>
      <a href='/index.html' className={styles.title}>SociaL C.</a>
    </header>
  )
}

export default Header;