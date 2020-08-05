import React from 'react';
import { Route } from "react-router-dom";
import Dialogs from './Dialogs/Dialogs';
import ProfilePage from './ProfilePage/ProfilePage';
import Music from './Music/Music';
import News from './News/News';
import Settings from './Settings/Settings';
import main from './main.module.css';

const Main = (props) => {
  return (
    <main className={main.main}>
      <Route path='/profile'
        render={() => (
          <ProfilePage dispatch={props.dispatch} />
        )}
      />
      <Route path='/dialogs'
        render={() => (
          <Dialogs dispatch={props.dispatch}/>
        )}
      />
      <Route path='/news' component={News}/>
      <Route path='/music' component={Music}/>
      <Route path='/settings' component={Settings} />
    </main>
  );
}

export default Main;