import usersList from '../Data/usersList';
import usersDialogs from '../Data/usersDialogs';

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_CURRENT_MESSAGE_INPUT = "UPDATE-CURRENT-MESSAGE-INPUT";

let initialState = {
  // usersList: usersList,
  usersDialogs: usersDialogs,
  currentMessageField: '',
};

let messagesPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: 
      let newState = Object.assign({}, state);

      let newMessage = {};
      let dialogs = newState.usersDialogs;

      newMessage.id = action.myId;
      newMessage.text = newState.currentMessageField;
      
      for (let i = 0; i < dialogs.length; i++) {
        if (action.userId === dialogs[i].userId) {
          newMessage.time = dialogs[i].messagesHistory.length + 1;
          dialogs[i].messagesHistory.push(newMessage);
          break;
        }
      }
      newState.currentMessageField = '';
      return newState;
    case UPDATE_CURRENT_MESSAGE_INPUT:
      return {
        ...state,
        currentMessageField: action.text,
      }
    default:
      return state;
  }
}

export default messagesPageReducer;