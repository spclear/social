const UPDATE_CURRENT_POST_INPUT = "UPDATE-CURRENT-POST-INPUT";
const UPDATE_CURRENT_MESSAGE_INPUT = "UPDATE-CURRENT-MESSAGE-INPUT";
const ADD_POST = "ADD-POST";
const SEND_MESSAGE = "SEND-MESSAGE";
const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const TOGGLE_FOLLOW_TWO = "TOGGLE-FOLLOW-TWO";
const SET_USERS = "SET-USERS";
const ADD_USERS = "ADD-USERS";
const SET_USERS_TOTAL = "SET-USERS-TOTAL";
const SWITCH_PAGE = "SWITCH-PAGE";
const TO_FIRST_PAGE = "TO-FIRST-PAGE";
const SET_LOADING_STATUS = "SET-LOADING-STATUS";

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
export const toggleFollowTwo = (id) => {
  return {
    type: TOGGLE_FOLLOW_TWO,
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