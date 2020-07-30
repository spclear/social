import React from 'react';
import {Route } from "react-router-dom";
import main from './main.module.css';
import Dialogs from './Dialogs/Dialogs';
import ProfilePage from './ProfilePage/ProfilePage';
import Music from './Music/Music';
import News from './News/News';
import Settings from './Settings/Settings';

const Main = (props) => {
  return (
    <main className={main.main}>
      <Route path='/profile' component={() => (
        <ProfilePage postsData={props.postsData} />
      )}
      />
      <Route path='/dialogs' component={() => (
        <Dialogs dialogsData={props.dialogsData} />
      )}
      />
      <Route path='/news' component={News}/>
      <Route path='/music' component={Music}/>
      <Route path='/settings' component={Settings} />
    </main>
  );
}

export default Main;