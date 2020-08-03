import usersList from './Data/usersList';
import usersDialogs from './Data/usersDialogs';
import postsList from './Data/usersPosts';
import friends from './Data/friendsData';
import { renderApp } from './render';

const state = {
  usersList: usersList,
  usersDialogs: usersDialogs,
  postsList: postsList,
  currentFieldText: 'wow',
  friends: friends,
}

export const addPost = (postMessage) => {
  let newPost = {}
  
  newPost.postId = state.postsList.length + 1;
  newPost.authorId = "641006348";
  newPost.time = "just now";
  newPost.text = postMessage;

  for (let i = 0; i < state.usersList.length; i++) {
    if (newPost.authorId == state.usersList[i].ID) {
      newPost.avatar = state.usersList[i].avatar;
      newPost.name = state.usersList[i].firstName;
      break;
    }
  }

  state.postsList.unshift(newPost);
  renderApp(state);
  state.currentFieldText = '';
}

export const updateCurrPostInput = text => {
  state.currentFieldText = text;
  renderApp(state);
}


export default state;