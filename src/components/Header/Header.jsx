import React from 'react';
import header from './header.module.css';


const Header = () => {
  return (
    <header className={header.header}>
      <a href='/' className={header.logo}></a>
      <a href='/' className={header.title}>SociaL C.</a>
    </header>
  );
}

export default Header;