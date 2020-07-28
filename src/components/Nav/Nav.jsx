import React from 'react';
import nav from './nav.module.css';

const NavLink = (props) => {
  return (
    <a className={nav.link} href='#'>
      {props.name}
    </a>
  );
}

const NavItem = (props) => {
  return (
    <li className={nav.item}>
      <NavLink name={props.linkname} />
    </li>
  );
}

const Nav = () => {
  return (
    <nav className={nav.nav}>
      <ul className={nav.list}>
        <NavItem linkname="Profile" />
        <NavItem linkname="Messages" />
        <NavItem linkname="News" />
        <NavItem linkname="Music" />
        <NavItem linkname="Settings" />
      </ul>
    </nav>
  );
}

export default Nav;