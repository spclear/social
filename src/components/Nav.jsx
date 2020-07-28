import React from 'react';
import nav from '../css_modules/nav.module.css';


const Nav = () => {
  return (
    <nav className={nav.nav}>
      <ul className={nav.list}>
        <li className={nav.item}>
          <a className={nav.link} href='#'>
            Profile
          </a>
        </li>
        <li className={nav.item}>
          <a className={nav.link} href='#'>
            Messages
          </a>
        </li>
        <li className={nav.item}>
          <a className={nav.link} href='#'>
            News
          </a>
        </li>
        <li className={nav.item}>
          <a className={nav.link} href='#'>
            Music
          </a>
        </li>
      </ul>
      <div className={nav.settings}>
        <a className={nav.link} href='#'>
          Settings
        </a>
      </div>
    </nav>
  );
}

export default Nav;