import friends from '../Data/friendsData';
import postsList from '../Data/usersPosts';

const ADD_POST = "ADD-POST";
const UPDATE_CURRENT_POST_INPUT = "UPDATE-CURRENT-POST-INPUT";

let initialState = {
  friends: friends,
  postsList: postsList,
  currentPostField: '',
};

let profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {};

      newPost.postId = state.postsList.length + 1;
      newPost.authorId = "641006348";
      newPost.time = "just now";
      newPost.text = state.currentPostField;

      return {
        ...state,
        postsList: [...state.postsList, newPost],
        currentPostField: '',
      }
    case UPDATE_CURRENT_POST_INPUT:
      return {
        ...state,
        currentPostField: action.text,
      }
    default:
      return state;
  }
}

export default profilePageReducer;