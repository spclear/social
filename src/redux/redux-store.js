import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import navBarReducer from './reducers/navBarReducer';
import profilePageReducer from './reducers/profilePageReducer';
import messagesPageReducer from './reducers/messagesPageReducer';
import newsPageReducer from './reducers/newsPageReducer';
import musicPageReducer from './reducers/musicPageReducer';
import usersPageReducer from './reducers/usersPageReducer';
import authReducer from './reducers/authReducer';
import appReducer from './reducers/appReducer';
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers({
  app: appReducer,
  auth: authReducer,
  navBar: navBarReducer,
  profilePage: profilePageReducer,
  messagesPage: messagesPageReducer,
  usersPage: usersPageReducer,
  newsPage: newsPageReducer,
  musicPage: musicPageReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;