import React from 'react';
import nav from './nav.module.css';

const NavLink = () => {
  return (
    <a className={nav.link} href='#'>
      Profile
    </a>
  );
}

const NavItem = () => {
  return (
    <li className={nav.item}>
      <NavLink />
    </li>
  )
}

const Nav = () => {
  return (
    <nav className={nav.nav}>
      <ul className={nav.list}>
        <NavItem />
        <NavItem />
        <NavItem />
        <NavItem />
      </ul>
      <div className={nav.settings}>
        <NavLink />
      </div>
    </nav>
  );
}

export default Nav;