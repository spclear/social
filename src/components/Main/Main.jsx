import React from 'react';
import { Route, Redirect } from "react-router-dom";
import styles from './main.module.css';
import LoginPageContainer from './LoginPage/LoginPageContainer';
import ProfilePageContainer from './ProfilePage/ProfilePageContainer';
import Music from './Music/Music';
import News from './News/News';
import UsersContainer from './Users/UsersContainer';
import DialogsContainer from './Dialogs/DialogsContainer';
import SettingsContainer from './Settings/SettingsContainer';

const Main = () => {
  return (
    <main className={styles.main}>
      <Route
        exact path='/'
        render={() => <Redirect to='/profile' />}
      />
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
        render={() => <SettingsContainer/>}
      />
    </main>
  )
}

export default Main;