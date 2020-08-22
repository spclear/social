const SET_LOGGED_STATUS = "SET-LOGGED-STATUS";
const SET_LOGGED_USER_DETAILS = "SET-LOGGED-USER-DETAILS";

const initialState = {
  isLoggedIn: false,
  currentUserDetails: {
    id: null,
    login: null,
    email: null,
  }
}

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_STATUS:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      }
    case SET_LOGGED_USER_DETAILS:
      return {
        ...state,
        currentUserDetails: action.data,
      }
    default:
      return state;
  }
}

export default authReducer;