import { createStore, combineReducers } from 'redux';
import navBarReducer from './reducers/navBarReducer';
import headerReducer from './reducers/headerReducer';
import profilePageReducer from './reducers/profilePageReducer';
import messagesPageReducer from './reducers/messagesPageReducer';
import newsPageReducer from './reducers/newsPageReducer';
import musicPageReducer from './reducers/musicPageReducer';
import usersPageReducer from './reducers/usersPageReducer';

let reducers = combineReducers({
  header: headerReducer,
  navBar: navBarReducer,
  profilePage: profilePageReducer,
  messagesPage: messagesPageReducer,
  usersPage: usersPageReducer,
  newsPage: newsPageReducer,
  musicPage: musicPageReducer,
});

let store = createStore(reducers);

export default store;