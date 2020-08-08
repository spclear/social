import usersList from '../Data/usersList';
import usersDialogs from '../Data/usersDialogs';

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_CURRENT_MESSAGE_INPUT = "UPDATE-CURRENT-MESSAGE-INPUT";

let initialState = {
  usersList: usersList,
  usersDialogs: usersDialogs,
  currentMessageField: '',
};

let messagesPageReducer = (state = initialState, action) => {
  let newState = state;

  switch (action.type) {
    case SEND_MESSAGE: 
      let newMessage = {};
      let dialogs = newState.usersDialogs;

      newMessage.id = action.myId;
      newMessage.text = newState.currentMessageField;
      
      for (let i = 0; i < dialogs.length; i++) {
        if (action.userId === dialogs[i].userId) {
          newMessage.time = dialogs[i].length + 1;
          dialogs[i].messagesHistory.unshift(newMessage);
          break;
        }
      }
      newState.currentMessageField = '';
      return newState;
    case UPDATE_CURRENT_MESSAGE_INPUT:
      newState.currentMessageField = action.text;
      return newState;
    default:
      return state;
  }
}

export default messagesPageReducer;