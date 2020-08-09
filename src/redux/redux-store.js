import { createStore, combineReducers } from 'redux';
import navBarReducer from './reducers/navBarReducer';
import headerReducer from './reducers/headerReducer';
import profilePageReducer from './reducers/profilePageReducer';
import messagesPageReducer from './reducers/messagesPageReducer';
import newsPageReducer from './reducers/newsPageReducer';
import musicPageReducer from './reducers/musicPageReducer';

const UPDATE_CURRENT_POST_INPUT = "UPDATE-CURRENT-POST-INPUT";
const UPDATE_CURRENT_MESSAGE_INPUT = "UPDATE-CURRENT-MESSAGE-INPUT";
const ADD_POST = "ADD-POST";
const SEND_MESSAGE = "SEND-MESSAGE";

let reducers = combineReducers({
  header: headerReducer,
  navBar: navBarReducer,
  profilePage: profilePageReducer,
  messagesPage: messagesPageReducer,
  newsPage: newsPageReducer,
  musicPage: musicPageReducer,
});

let store = createStore(reducers);

store.getAvatar = (id) => {
    const users = store.getState().profilePage.usersList;
    for (let i = 0; i < users.length; i++) {
      if (id === users[i].ID) {
        return users[i].avatar;
      }
    }
}

store.getName = (id) => {
  const users = store.getState().profilePage.usersList;
  for (let i = 0; i < users.length; i++) {
    if (id === users[i].ID) {
      return users[i].firstName;
    }
  }
}

store.getFullName = (id) => {
  const users = store.getState().profilePage.usersList;
  for (let i = 0; i < users.length; i++) {
    if (id === users[i].ID) {
      return `${users[i].firstName} ${users[i].lastName}`;
    }
  }
}

store.getDialog = (id) => {
  const dialogs = store.getState().messagesPage.usersDialogs;
  for (let i = 0; i < dialogs.length; i++) {
    if (id === dialogs[i].userId) {
      return dialogs[i];
    }
  }
}

export const updatePostInputActionCreator = (text) => {
  return {
    type: UPDATE_CURRENT_POST_INPUT,
    text: text,
  }
}
export const updateMessageInputActionCreator = (text) => {
  return {
    type: UPDATE_CURRENT_MESSAGE_INPUT,
    text: text,
  }
}
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  }
}
export const sendMessageActionCreator = (id, idSelf) => {
  return {
    type: SEND_MESSAGE,
    userId: id,
    myId: idSelf,
  }
}

export default store;