import React from 'react';
import footer from './footer.module.css';

const Footer = () => {
  return (
    <footer className={footer.footer}>
      <p className={footer.info}>some footer info</p>
    </footer>
  );
}

export default Footer;