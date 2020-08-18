import friends from '../Data/friendsData';
import postsList from '../Data/usersPosts';

const ADD_POST = "ADD-POST";
const UPDATE_CURRENT_POST_INPUT = "UPDATE-CURRENT-POST-INPUT";
const SET_CURRENT_USER = "SET-CURRENT-USER";

let initialState = {
  currentUser: "641006348",
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
    case SET_CURRENT_USER: 
      return {
        ...state,
        currentUser: action.id,
      }
    default:
      return state;
  }
}

export default profilePageReducer;