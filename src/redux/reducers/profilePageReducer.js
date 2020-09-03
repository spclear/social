import friends from '../Data/friendsData';
import postsList from '../Data/usersPosts';

const SET_CURRENT_USER = "SET-CURRENT-USER";
const SET_CURRENT_USER_INFO = "SET-CURRENT-USER-INFO";
const SET_CURRENT_USER_STATUS = "SET-CURRENT-USER-STATUS";

const ADD_POST = "ADD-POST";

let initialState = {
  loggedUser: "641006348", // for fake data
  authorizedUser: null,
  shownUser: null,
  currentUserInfo: null,
  currentUserStatus: "",
  friends: friends,
  postsList: postsList,
};

let profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {};

      newPost.postId = state.postsList.length + 1;
      newPost.authorId = "641006348";
      newPost.time = "just now";
      newPost.text = action.postText;

      return {
        ...state,
        postsList: [...state.postsList, newPost],
      }
    case SET_CURRENT_USER:
      return {
        ...state,
        authorizedUser: action.id,
      }
    case SET_CURRENT_USER_INFO:
      return {
        ...state,
        shownUser: action.user.userId,
        currentUserInfo: action.user,
      }
    case SET_CURRENT_USER_STATUS:
      return {
        ...state,
        currentUserStatus: action.status,
      }
    default:
      return state;
  }
}

export default profilePageReducer;