import React from 'react';
import footerSt from '../css_modules/footer.module.css';

const Footer = () => {
  return (
    <footer className={footerSt.footer}>
      <p className={footerSt.info}>some footer info</p>
    </footer>
  );
}

export default Footer;