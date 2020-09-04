import React from 'react';
import { Route } from "react-router-dom";
import styles from './main.module.css';
import LoginPageContainer from './LoginPage/LoginPageContainer';
import ProfilePageContainer from './ProfilePage/ProfilePageContainer';
import Music from './Music/Music';
import News from './News/News';
import Settings from './Settings/Settings';
import UsersContainer from './Users/UsersContainer';
import DialogsContainer from './Dialogs/DialogsContainer';

const Main = () => {
  return (
    <main className={styles.main}>
      <Route
        path='/login'
        render={() => <LoginPageContainer />}
      />
      <Route
        path='/profile/:userId?'
        render={() => <ProfilePageContainer />}
      />
      <Route
        path='/dialogs/'
        render={() => <DialogsContainer />} 
      />
      <Route
        path='/users'
        render={() => <UsersContainer />} 
      />
      <Route
        path='/news'
        render={() => <News />}
      />
      <Route
        path='/music'
        render={() => <Music/>}
      />
      <Route
        path='/settings'
        render={() => <Settings/>}
      />
    </main>
  )
}

export default Main;