import React from 'react';
import { Route } from "react-router-dom";
import styles from './main.module.css';
import Dialogs from './Dialogs/Dialogs';
import ProfilePage from './ProfilePage/ProfilePage';
import Music from './Music/Music';
import News from './News/News';
import Settings from './Settings/Settings';

const Main = () => {
  return (
    <main className={styles.main}>
      <Route
        path='/profile'
        render={() => <ProfilePage />}
      />
      <Route
        path='/dialogs'
        render={() => <Dialogs />} 
      />
      <Route
        path='/news'
        render={News}
      />
      <Route
        path='/music'
        render={Music}
      />
      <Route
        path='/settings'
        render={Settings}
      />
    </main>
  )
}

export default Main;