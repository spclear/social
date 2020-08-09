import friends from '../Data/friendsData';
import usersList from '../Data/usersList';
import postsList from '../Data/usersPosts';

const ADD_POST = "ADD-POST";
const UPDATE_CURRENT_POST_INPUT = "UPDATE-CURRENT-POST-INPUT";

let initialState = {
  usersList: usersList,
  friends: friends,
  postsList: postsList,
  currentPostField: '',
};

let profilePageReducer = (state = initialState, action) => {
  let newState = state;

  switch (action.type) {
    case ADD_POST:
      let newPost = {};
      let posts = newState.postsList;

      newPost.postId = posts.length + 1;
      newPost.authorId = "641006348";
      newPost.time = "just now";
      newPost.text = newState.currentPostField;
      posts.push(newPost);

      newState.currentPostField = '';

      return newState;
    case UPDATE_CURRENT_POST_INPUT:
      newState.currentPostField = action.text;
      return newState;
    default:
      return state;
  }
}

export default profilePageReducer;