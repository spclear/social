const UPDATE_CURRENT_POST_INPUT = "UPDATE-CURRENT-POST-INPUT";
const UPDATE_CURRENT_MESSAGE_INPUT = "UPDATE-CURRENT-MESSAGE-INPUT";
const ADD_POST = "ADD-POST";
const SEND_MESSAGE = "SEND-MESSAGE";
const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_USERS = "SET-USERS";
const ADD_USERS = "ADD-USERS";
const SET_USERS_TOTAL = "SET-USERS-TOTAL";
const SWITCH_PAGE = "SWITCH-PAGE";
const TO_FIRST_PAGE = "TO-FIRST-PAGE";
const SET_LOADING_STATUS = "SET-LOADING-STATUS";
const SET_CURRENT_DIALOG_ID = "SET-CURRENT-DIALOG-ID";
const SET_CURRENT_USER = "SET-CURRENT-USER";
const SET_CURRENT_USER_INFO = "SET-CURRENT-USER-INFO";
const SET_LOGGED_STATUS = "SET-LOGGED-STATUS";
const SET_LOGGED_USER_DETAILS = "SET-LOGGED-USER-DETAILS";
const SET_FOLLOWING_PROGRESS_STATUS = "SET-FOLLOWING-PROGRESS-STATUS";
const SET_CURRENT_USER_STATUS = "SET-CURRENT-USER-STATUS";
const SET_LOGGIN_PROCESS_STATUS = " SET-LOGGIN-PROCESS-STATUS";

export const updatePostInput = (text) => {
  return {
    type: UPDATE_CURRENT_POST_INPUT,
    text,
  }
}
export const updateMessageInput = (text) => {
  return {
    type: UPDATE_CURRENT_MESSAGE_INPUT,
    text,
  }
}
export const addPost = () => {
  return {
    type: ADD_POST,
  }
}
export const sendMessage = (id, idSelf) => {
  return {
    type: SEND_MESSAGE,
    userId: id,
    myId: idSelf,
  }
}
export const toggleFollow = (id) => {
  return {
    type: TOGGLE_FOLLOW,
    id,
  }
}
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  }
}
export const addUsers = (users) => {
  return {
    type: ADD_USERS,
    users,
  }
}
export const setUsersTotal = (number) => {
  return {
    type: SET_USERS_TOTAL,
    number,
  }
}
export const switchPage = (number) => {
  return {
    type: SWITCH_PAGE,
    number,
  }
}
export const toFirstPage = () => {
  return {
    type: TO_FIRST_PAGE,
  }
}
export const setLoadingStatus = (value) => {
  return {
    type: SET_LOADING_STATUS,
    value,
  }
}
export const setCurrentDialogId = (id) => {
  return {
    type: SET_CURRENT_DIALOG_ID,
    id,
  }
}
export const setCurrentUser = (id) => {
  return {
    type: SET_CURRENT_USER,
    id,
  }
}
export const setCurrentUserInfo = (user) => {
  return {
    type: SET_CURRENT_USER_INFO,
    user,
  }
}
export const setLoggedStatus = (isLoggedIn) => {
  return {
    type: SET_LOGGED_STATUS,
    isLoggedIn,
  }
}
export const setLoginProcessStatus = (isInProcess) => {
  return {
    type: SET_LOGGIN_PROCESS_STATUS,
    isInProcess,
  }
}
export const setLoggedUserDetails = (data) => {
  return {
    type: SET_LOGGED_USER_DETAILS,
    data,
  }
}
export const setFollowingProgressStatus = (id, value) => {
  return {
    type: SET_FOLLOWING_PROGRESS_STATUS,
    id,
    value,
  }
}
export const setCurrentUserStatus = (status) => {
  return {
    type: SET_CURRENT_USER_STATUS,
    status,
  }
}