import usersList from '../Data/usersList';

const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const TOGGLE_FOLLOW_TWO = "TOGGLE-FOLLOW-TWO";
const SET_USERS = "SET-USERS";
const ADD_USERS = "ADD-USERS";
const SET_USERS_TOTAL = "SET-USERS-TOTAL";
const SWITCH_PAGE = "SWITCH-PAGE";
const TO_FIRST_PAGE = "TO-FIRST-PAGE";
const SET_LOADING_STATUS = "SET-LOADING-STATUS";

let initialState = { 
  usersList: usersList,
  friendsShown: 4,
  serverUsersList: [],
  usersShownNumber: 6,
  usersTotal: 0,
  currentPage: 1,
  isLoading: false,
  getName(id) {
    const users = this.usersList;
    const user = users.find(item => item.id === id);
    return user.firstName;
  },
  getAvatar(id) {
    const users = this.usersList;
    const user = users.find(item => item.id === id);
    return user.avatar;
  },
  getFullName(id) {
    const users = this.usersList;
    const user = users.find(item => item.id === id);
    return `${user.firstName} ${user.lastName}`;
  },
}

let usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        usersList: state.usersList.map(item => {
          if (item.id === action.id) {
            return { ...item, followed: !item.followed }
          }
          return item
        })
      }
    case TOGGLE_FOLLOW_TWO:
      return {
        ...state,
        serverUsersList: state.serverUsersList.map(item => {
          if (item.id === action.id) {
            return { ...item, followed: !item.followed }
          }
          return item
        })
      }
    case SET_USERS:
      return {
        ...state,
        serverUsersList: action.users,
      }
    case ADD_USERS:
      return {
        ...state,
        serverUsersList: [...state.serverUsersList]
      }
    case SET_USERS_TOTAL:
      return {
        ...state,
        usersTotal: action.number,
      }
    case SWITCH_PAGE:
      return {
        ...state,
        currentPage: action.number,
      }
    case TO_FIRST_PAGE:
      return {
        ...state,
        currentPage: 1,
      }
    case SET_LOADING_STATUS: 
      return {
        ...state,
        isLoading: action.value,
      }
    default:
      return state;
  }
}

export default usersPageReducer;