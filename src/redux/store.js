import usersList from './Data/usersList';
import usersDialogs from './Data/usersDialogs';
import postsList from './Data/usersPosts';
import friends from './Data/friendsData';

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
    usersList: usersList,
    usersDialogs: usersDialogs,
    postsList: postsList,
    currentFieldPost: '',
    currentFieldMessage: '',
    friends: friends,
  },

  _getAvatar(id) {
    const users = this._state.usersList;
    
    for (let i = 0; i < users.length; i++) {
      if (id === users[i].ID) {
        return users[i].avatar;
      }
    }
  },

  _getName(id) {
    const users = this._state.usersList;
    
    for (let i = 0; i < users.length; i++) {
      if (id === users[i].ID) {
        return users[i].firstName;
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
    switch (action.type) {
      case GET_STATE:
        return this._state;
  
      case GET_AVATAR: {
         const users = this._state.usersList;
         for (let i = 0; i < users.length; i++) {
           if (action.id === users[i].ID) {
             return users[i].avatar;
           }
         }
      }

      case GET_NAME: {
        const users = this._state.usersList;
        for (let i = 0; i < users.length; i++) {
          if (action.id === users[i].ID) {
            return users[i].firstName;
          }
        }
      }
        
      case GET_FULL_NAME: {
        const users = this._state.usersList;
        for (let i = 0; i < users.length; i++) {
          if (action.id === users[i].ID) {
            return `${users[i].firstName} ${users[i].lastName}`;
          }
        }
      }
        
      case UPDATE_CURRENT_POST_INPUT: {
        this._state.currentFieldPost = action.text;
        this._callSubscriber();
        return;
      }
        
      case UPDATE_CURRENT_MESSAGE_INPUT: {
        this._state.currentFieldMessage = action.text;
        this._callSubscriber();
        return;
      }
      
      case ADD_POST: {
        let newPost = {};
        let posts = this._state.postsList;

        newPost.postId = posts.length + 1;
        newPost.authorId = "641006348";
        newPost.time = "just now";
        newPost.text = this._state.currentFieldPost;
        
        posts.unshift(newPost);
        this._callSubscriber();
        this._state.currentFieldPost = '';
        return;
      }
      
      case SEND_MESSAGE: {
        let newMessage = {};
        let dialogs = this._state.usersDialogs;

        newMessage.id = action.myId;
        newMessage.text = this._state.currentFieldMessage;

        for (let i = 0; i < dialogs.length; i++) {
          if (action.userId === dialogs[i].userId) {
            newMessage.time = dialogs[i].length + 1;
            dialogs[i].messagesHistory.unshift(newMessage);
            break;
          }
        }

        this._callSubscriber();
        this._state.currentFieldMessage = '';
        return;
      }
        
      case GET_DIALOG: {
        const dialogs = this._state.usersDialogs;
        for (let i = 0; i < dialogs.length; i++) {
          if (action.id === dialogs[i].userId) {
            return dialogs[i];
          }
        }
      }
    }
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