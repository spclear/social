import usersDialogs from '../Data/usersDialogs';

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_CURRENT_MESSAGE_INPUT = "UPDATE-CURRENT-MESSAGE-INPUT";
const SET_CURRENT_DIALOG_ID = "SET-CURRENT-DIALOG-ID";

let initialState = {
  usersDialogs: usersDialogs,
  currentMessageField: '',
  currentDialog: null,
  getDialog(id) {
    const dialogs = this.usersDialogs;
    const dialog = dialogs.find(item => item.userId === id);
    return dialog.messagesHistory;
  },
};

let messagesPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newState = Object.assign({}, state);
      let newMessage = {};
      let messagesHistory = newState.getDialog(newState.currentDialog);

      newMessage.text = newState.currentMessageField;
      newMessage.id = action.myId;
      newMessage.time = messagesHistory.length + 1;
      messagesHistory.push(newMessage);
      newState.currentMessageField = '';
      
      return newState;
    case UPDATE_CURRENT_MESSAGE_INPUT:
      return {
        ...state,
        currentMessageField: action.text,
      }
    case SET_CURRENT_DIALOG_ID: 
      return {
        ...state,
        currentDialog: action.id,
      }
    default:
      return state;
  }
}

export default messagesPageReducer;