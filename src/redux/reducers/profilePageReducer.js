import friends from '../Data/friendsData';
import postsList from '../Data/usersPosts';

const SET_CURRENT_USER = "SET-CURRENT-USER";
const SET_CURRENT_USER_INFO = "SET-CURRENT-USER-INFO";

const ADD_POST = "ADD-POST";
const UPDATE_CURRENT_POST_INPUT = "UPDATE-CURRENT-POST-INPUT";

let initialState = {
  loggedUser: "641006348",
  currentShownUser: 2,
  currentUserInfo: null,
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
    case SET_CURRENT_USER_INFO: 
      return {
        ...state,
        currentUserInfo: action.user,
      }
    default:
      return state;
  }
}

export default profilePageReducer;