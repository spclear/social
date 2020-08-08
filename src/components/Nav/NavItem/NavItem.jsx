import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navitem.module.css';

const NavItem = (props) => {
  return (
    <li className={styles.item}>
      <NavLink
        to={props.to}
        className={styles.itemLink}
        activeClassName={styles.active}
      >
        {props.linkname}
      </NavLink>
    </li>
  )
}

export default NavItem