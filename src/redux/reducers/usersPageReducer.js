import usersList from '../Data/usersList';

const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";

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
        usersList: state.usersList
          .map(item => {
            return (item.id === action.id)
              ? item
              : {
                ...item,
                followed: !item.followed,
              }
          })
      }
    default:
      return state;
  }
}

export default usersPageReducer;