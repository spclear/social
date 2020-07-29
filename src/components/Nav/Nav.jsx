import React from 'react';
import nav from './nav.module.css';

const NavLink = (props) => {
  return (
    <a className={nav.link} href={props.href}>
      {props.name}
    </a>
  );
}

const NavItem = (props) => {
  return (
    <li className={nav.item}>
      <NavLink href={props.href} name={props.linkname} />
    </li>
  );
}

const Nav = () => {
  return (
    <nav className={nav.nav}>
      <ul className={nav.list}>
        <NavItem href='/profile' linkname="Profile" />
        <NavItem href='/dialogs' linkname="Messages" />
        <NavItem href='/news' linkname="News" />
        <NavItem href='/music' linkname="Music" />
        <NavItem href='/settings' linkname="Settings" />
      </ul>
    </nav>
  );
}

export default Nav;