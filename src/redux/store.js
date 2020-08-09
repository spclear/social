// import for data of store>state
import usersList from './Data/usersList';
import usersDialogs from './Data/usersDialogs';
import postsList from './Data/usersPosts';
import friends from './Data/friendsData';

//reducers for store>dispatch
import messagesPageReducer from './reducers/messagesPageReducer';
import profilePageReducer from './reducers/profilePageReducer';

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
  getState() {
    return this._state;
  },

  getAvatar(id) {
    const users = this._state.profilePage.usersList;
    for (let i = 0; i < users.length; i++) {
      if (id === users[i].ID) {
        return users[i].avatar;
      }
    }
  },  

  getName(id) {
    const users = this._state.profilePage.usersList;
    for (let i = 0; i < users.length; i++) {
      if (id === users[i].ID) {
        return users[i].firstName;
      }
    }
  },  

  getFullName(id) {
    const users = this._state.profilePage.usersList;
    for (let i = 0; i < users.length; i++) {
      if (id === users[i].ID) {
        return `${users[i].firstName} ${users[i].lastName}`;
      }
    }
  },  

  getDialog(id) {
    const dialogs = this._state.messagesPage.usersDialogs;
    for (let i = 0; i < dialogs.length; i++) {
      if (id === dialogs[i].userId) {
        return dialogs[i];
      }
    }
  },  
  
  _callSubscriber() {
    console.log('There are no subscribers (observers) for now.')
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },


  dispatch(action) {
    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action);

    this._callSubscriber();
  },
}

// export const updatePostInputActionCreator = (text) => {
//   return {
//     type: UPDATE_CURRENT_POST_INPUT,
//     text: text,
//   }
// }
// export const updateMessageInputActionCreator = (text) => {
//   return {
//     type: UPDATE_CURRENT_MESSAGE_INPUT,
//     text: text,
//   }
// }
// export const addPostActionCreator = () => {
//   return {
//     type: ADD_POST,
//   }
// }
// export const sendMessageActionCreator = (id, idSelf) => {
//   return {
//     type: SEND_MESSAGE,
//     userId: id,
//     myId: idSelf,
//   }
// }

export default store;