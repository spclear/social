import usersList from './Data/usersList';
import usersDialogs from './Data/usersDialogs';
import postsList from './Data/usersPosts';
import friends from './Data/friendsData';


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
      case "GET-STATE":
        return this._state;
  
      case "GET-AVATAR": {
          const users = this._state.usersList;
          for (let i = 0; i < users.length; i++) {
            if (action.id === users[i].ID) {
              return users[i].avatar;
            }
          }
      }

      case "GET-NAME": {
          const users = this._state.usersList;
          for (let i = 0; i < users.length; i++) {
            if (action.id === users[i].ID) {
              return users[i].firstName;
            }
          }
      }
        
      case "GET-FULL-NAME": {
          const users = this._state.usersList;
          for (let i = 0; i < users.length; i++) {
            if (action.id === users[i].ID) {
              return `${users[i].firstName} ${users[i].lastName}`;
            }
          }
      }
        
      case "UPDATE-CURRENT-POST-INPUT": {
          this._state.currentFieldText = action.text;
          this._callSubscriber();
          return;
      }
      
      case "ADD-POST": {
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

export default store;