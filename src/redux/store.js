import usersList from './Data/usersList';
import usersDialogs from './Data/usersDialogs';
import postsList from './Data/usersPosts';
import friends from './Data/friendsData';

const GET_STATE = "GET-STATE";
const GET_AVATAR = "GET-AVATAR";
const GET_NAME = "GET-NAME";
const GET_FULL_NAME = "GET-FULL-NAME";
const UPDATE_CURRENT_POST_INPUT = "UPDATE-CURRENT-POST-INPUT";
const ADD_POST = "ADD-POST";

const store = {
  _state: {
    usersList: usersList,
    usersDialogs: usersDialogs,
    postsList: postsList,
    currentFieldText: '. . .',
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
          this._state.currentFieldText = action.text;
          this._callSubscriber();
          return;
      }
      
      case ADD_POST: {
          let newPost = {}
          let posts = this._state.postsList;

          newPost.postId = posts.length + 1;
          newPost.authorId = "641006348";
          newPost.time = "just now";
          newPost.text = action.message;

          newPost.name = this._getName(newPost.authorId);
          newPost.avatar = this._getAvatar(newPost.authorId);

          posts.unshift(newPost);
          this._callSubscriber();
          this._state.currentFieldText = '';
          return;
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

export const addPostActionCreator = (message) => {
  return {
    type: ADD_POST,
    message: message
  }
}

export default store;