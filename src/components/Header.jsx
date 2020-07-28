import React from 'react';
import headerSt from '../css_modules/header.module.css';


const Header = () => {
  return (
    <header className={headerSt.header}>
      <a href='/' className={headerSt.logo}></a>
      <a href='/' className={headerSt.title}>SociaL C.</a>
    </header>
  );
}

export default Header;