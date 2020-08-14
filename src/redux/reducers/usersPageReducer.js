import usersList from '../Data/usersList';

const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_USERS = "SET-USERS";
const ADD_USERS = "ADD-USERS";

let initialState = { 
  usersList: usersList,
  friendsShown: 4,
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
    case SET_USERS: 
      return {
        ...state,
        usersList: action.users,
      }
    case ADD_USERS: 
      return {
        ...state,
        usersList: [...state.usersList, ...action.users]
      }
    default:
      return state;
  }
}

export default usersPageReducer;