import React from 'react';
import nav from './nav.module.css';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <li className={nav.item}>
      <NavLink to={props.to} className={nav.itemLink} activeClassName={nav.active}>
        {props.linkname}
      </NavLink>
    </li>
  );
}

const Nav = () => {
  return (
      <nav className={nav.nav}>
        <ul className={nav.list}>
          <NavItem to="/profile" linkname="Profile" />
          <NavItem to="/dialogs" linkname="Messages" />
          <NavItem to="/news" linkname="News" />
          <NavItem to="/music" linkname="Music" />
          <NavItem to="/settings" linkname="Settings" />
        </ul>
      </nav>
  );
}

export default Nav;