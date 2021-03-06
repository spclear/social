import usersList from '../Data/usersList';

const SET_USERS = "SET-USERS";
const SET_USERS_TOTAL = "SET-USERS-TOTAL";
const SET_LOADING_STATUS = "SET-LOADING-STATUS";
const SET_FOLLOWING_PROGRESS_STATUS = "SET-FOLLOWING-PROGRESS-STATUS";

const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";

const ADD_USERS = "ADD-USERS";
const SWITCH_PAGE = "SWITCH-PAGE";
const TO_FIRST_PAGE = "TO-FIRST-PAGE";

let initialState = { 
  usersList: usersList,
  friendsShown: 4,
  serverUsersList: [],
  shownUsersNumber: 10,
  usersTotal: 0,
  currentPage: 1,
  isLoading: false,
  inFollowingProgress: [],
  getName(id) {
    const users = this.usersList;
    const user = users.find(item => item.id === id);
    return user.firstName;
  },
  getAvatar(id) {
    const users = this.usersList;
    const user = users.find(item => item.id === id);
    return user.photos.large;
  },
  getFullName(id) {
    const users = this.usersList;
    const user = users.find(item => item.id === id);
    return user.fullName;
  },
  getUser(id) {
    const users = this.usersList;
    const user = users.find(item => item.id === id);
    return user;
  },
  getInfo(id) {
    const users = this.usersList;
    const user = users.find(item => item.id === id);
    return {
      status: user.status,
      location: {...user.location},
      contacts: { ...user.contacts},
      aboutMe: user.aboutMe,
      lookingForAJob: user.lookingForAJob,
      lookingForAJobDescription: user.lookingForAJobDescription,
    }
  }
}

let usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
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
    case SET_FOLLOWING_PROGRESS_STATUS: 
      return {
        ...state,
        inFollowingProgress: action.value
          ? [...state.inFollowingProgress, action.id]
          : state.inFollowingProgress.filter(id => id !== action.id)
      }
    default:
      return state;
  }
}

export default usersPageReducer;