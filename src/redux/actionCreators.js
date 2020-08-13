const UPDATE_CURRENT_POST_INPUT = "UPDATE-CURRENT-POST-INPUT";
const UPDATE_CURRENT_MESSAGE_INPUT = "UPDATE-CURRENT-MESSAGE-INPUT";
const ADD_POST = "ADD-POST";
const SEND_MESSAGE = "SEND-MESSAGE";
const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_USERS = "SET-USERS";
const ADD_USERS = "ADD-USERS";

export const updatePostInputAC = (text) => {
  return {
    type: UPDATE_CURRENT_POST_INPUT,
    text,
  }
}
export const updateMessageInputAC = (text) => {
  return {
    type: UPDATE_CURRENT_MESSAGE_INPUT,
    text,
  }
}
export const addPostAC = () => {
  return {
    type: ADD_POST,
  }
}
export const sendMessageAC = (id, idSelf) => {
  return {
    type: SEND_MESSAGE,
    userId: id,
    myId: idSelf,
  }
}
export const toggleFollowAC = (id) => {
  return {
    type: TOGGLE_FOLLOW,
    id,
  }
}
export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  }
}
export const addUsersAC = (users) => {
  return {
    type: ADD_USERS,
    users,
  }
}
