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
export const toggleFollowTwoAC = (id) => {
  return {
    type: TOGGLE_FOLLOW_TWO,
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
export const setUsersTotalAC = (number) => {
  return {
    type: SET_USERS_TOTAL,
    number,
  }
}
export const switchPageAC = (number) => {
  return {
    type: SWITCH_PAGE,
    number,
  }
}
export const toFirstPageAC = () => {
  return {
    type: TO_FIRST_PAGE,
  }
}