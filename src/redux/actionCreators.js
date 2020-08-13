const UPDATE_CURRENT_POST_INPUT = "UPDATE-CURRENT-POST-INPUT";
const UPDATE_CURRENT_MESSAGE_INPUT = "UPDATE-CURRENT-MESSAGE-INPUT";
const ADD_POST = "ADD-POST";
const SEND_MESSAGE = "SEND-MESSAGE";
const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";

export const updatePostInputAC = (text) => {
  return {
    type: UPDATE_CURRENT_POST_INPUT,
    text: text,
  }
}
export const updateMessageInputAC = (text) => {
  return {
    type: UPDATE_CURRENT_MESSAGE_INPUT,
    text: text,
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
export const toggleFollow = (id) => {
  return {
    type: TOGGLE_FOLLOW,
    id: id,
  }
}