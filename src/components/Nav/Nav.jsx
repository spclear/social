import React from 'react';
import styles from './nav.module.css';
import NavItem from './NavItem/NavItem';
import FriendsBarContainer from './FriendsBar/FriendsBarContainer';

const Nav = (props) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <NavItem to="/profile" linkname="Profile" />
        <NavItem to="/dialogs" linkname="Messages" />
        <NavItem to="/news" linkname="News" />
        <NavItem to="/music" linkname="Music" />
        <NavItem to="/settings" linkname="Settings" />
      </ul>
      <FriendsBarContainer store={props.store}/>
    </nav>
  )
}

export default Nav;