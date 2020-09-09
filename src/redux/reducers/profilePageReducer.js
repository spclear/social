import friends from '../Data/friendsData';
import postsList from '../Data/usersPosts';

const SET_CURRENT_USER = "SET-CURRENT-USER";
const SET_CURRENT_USER_INFO = "SET-CURRENT-USER-INFO";
const SET_CURRENT_USER_STATUS = "SET-CURRENT-USER-STATUS";
const SET_CURRENT_USER_PHOTOS = "SET-CURRENT-USER-PHOTOS";
const SET_IS_PHOTO_UPLOADING = "SET-IS-PHOTO-UPLOADING";
const SET_IS_PROFILE_UPDATED = "SET-IS-PROFILE-UPDATED";

const ADD_POST = "ADD-POST";

let initialState = {
  loggedUser: "641006348", // for fake data
  authorizedUser: null,
  shownUser: null,
  currentUserInfo: null,
  currentUserStatus: "",
  friends: friends,
  postsList: postsList,
  isPhotoUploading: false,
  isProfileUpdated: false,
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
    case SET_CURRENT_USER_PHOTOS: 
      return {
        ...state,
        currentUserInfo: {
          ...state.currentUserInfo,
          photos: action.photos
        }
      }
    case SET_IS_PHOTO_UPLOADING: 
      return {
        ...state,
        isPhotoUploading: action.isUploading,
      }
    case SET_IS_PROFILE_UPDATED:
      return {
        ...state,
        isProfileUpdated: true
      }
    default:
      return state;
  }
}

export default profilePageReducer;