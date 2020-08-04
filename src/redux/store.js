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

  getState() {
    return this._state;
  },

  getAvatar(id) {
    const users = this._state.usersList;
    
    for (let i = 0; i < users.length; i++) {
      if (id === users[i].ID) {
        return users[i].avatar;
      }
    }
  },

  getName(id) {
    const users = this._state.usersList;
    
    for (let i = 0; i < users.length; i++) {
      if (id === users[i].ID) {
        return users[i].firstName;
      }
    }
  },

  getFullName(id) {
    const users = this._state.usersList;

    for (let i = 0; i < users.length; i++) {
      if (id === users[i].ID) {
        return `${users[i].firstName} ${users[i].lastName}`;
      }
    }
  },

  _callSubscriber() {
    console.log('There are no subscribers (observers) for now.')
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  addPost(message) {
    let newPost = {}
    let posts = this._state.postsList;

    newPost.postId = posts.length + 1;
    newPost.authorId = "641006348";
    newPost.time = "just now";
    newPost.text = message;

    newPost.name = this.getName(newPost.authorId);
    newPost.avatar = this.getAvatar(newPost.authorId);

    posts.unshift(newPost);
    this._callSubscriber();
    this._state.currentFieldText = '';
  },

  updateCurrPostInput (text) {
    this._state.currentFieldText = text;
    this._callSubscriber();
  }
}

export default store;