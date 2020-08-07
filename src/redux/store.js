import usersList from './Data/usersList';
import usersDialogs from './Data/usersDialogs';
import postsList from './Data/usersPosts';
import friends from './Data/friendsData';

import messagesPageReducer from './reducers/messagesPageReducer';
import profilePageReducer from './reducers/profilePageReducer';

const GET_STATE = "GET-STATE";
const GET_AVATAR = "GET-AVATAR";
const GET_NAME = "GET-NAME";
const GET_FULL_NAME = "GET-FULL-NAME";
const GET_DIALOG = "GET-DIALOG";
const UPDATE_CURRENT_POST_INPUT = "UPDATE-CURRENT-POST-INPUT";
const UPDATE_CURRENT_MESSAGE_INPUT = "UPDATE-CURRENT-MESSAGE-INPUT";
const ADD_POST = "ADD-POST";
const SEND_MESSAGE = "SEND-MESSAGE";

const store = {
  _state: {
    profilePage: {
      usersList: usersList,
      friends: friends,
      postsList: postsList,
      currentPostField: '',
    },
    messagesPage: {
      usersList: usersList,
      usersDialogs: usersDialogs,
      currentMessageField: '',
    },
    navBar: {
      friends: friends,
    },
  },

  _callSubscriber() {
    console.log('There are no subscribers (observers) for now.')
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    switch (action.type) {
      case GET_STATE:
        return this._state;

      case GET_AVATAR: {
        const users = this._state.profilePage.usersList;
        for (let i = 0; i < users.length; i++) {
          if (action.id === users[i].ID) {
            return users[i].avatar;
          }
        }
      }

      case GET_NAME: {
        const users = this._state.profilePage.usersList;
        for (let i = 0; i < users.length; i++) {
          if (action.id === users[i].ID) {
            return users[i].firstName;
          }
        }
      }

      case GET_FULL_NAME: {
        const users = this._state.profilePage.usersList;
        for (let i = 0; i < users.length; i++) {
          if (action.id === users[i].ID) {
            return `${users[i].firstName} ${users[i].lastName}`;
          }
        }
      }
        
      case GET_DIALOG: {
        const dialogs = this._state.messagesPage.usersDialogs;
        for (let i = 0; i < dialogs.length; i++) {
          if (action.id === dialogs[i].userId) {
            return dialogs[i];
          }
        }
      }
    }
    this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action);
    this._state.profilePage = profilePageReducer(this._state.profilePage, action);

    this._callSubscriber();
  },
}

export const getNameActionCreator = (id) => {
  return {
    type: GET_NAME,
    id: id,
  }
}
export const getFullNameActionCreator = (id) => {
  return {
    type: GET_FULL_NAME,
    id: id,
  }
}
export const getAvatarActionCreator = (id) => {
  return {
    type: GET_AVATAR,
    id: id,
  }
}
export const getDialogActionCreator = (id) => {
  return {
    type: GET_DIALOG,
    id: id,
  }
}
export const getStateActionCreator = () => {
  return {
    type: GET_STATE,
  }
}
export const updateInputActionCreator = (text) => {
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