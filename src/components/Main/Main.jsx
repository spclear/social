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
      <Route path='/profile'
        render={() => (
          <ProfilePage
            posts={props.state.postsList}
            profile={props.state.usersList}
            addPost={props.addPost}
          />
        )}
      />
      <Route path='/dialogs'
        render={() => (
          <Dialogs
            dialogs={props.state.usersDialogs}
          />
        )}
      />
      <Route path='/news' component={News}/>
      <Route path='/music' component={Music}/>
      <Route path='/settings' component={Settings} />
    </main>
  );
}

export default Main;