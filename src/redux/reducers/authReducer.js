const SET_LOGGED_STATUS = "SET-LOGGED-STATUS";
const SET_LOGGED_USER_DETAILS = "SET-LOGGED-USER-DETAILS";
const SET_LOGGED_USER_INFO = "SET-LOGGED-USER-INFO";
const SET_LOGGIN_PROCESS_STATUS = "SET-LOGGIN-PROCESS-STATUS";
const SET_CAPTCHA_URL = "SET-CAPTCHA-URL";

const initialState = {
  isLoggedIn: false,
  loginProcessStatus: false,
  currentUserDetails: {
    id: null,
    login: null,
    email: null,
  },
  currentUserInfo: null,
  captchaUrl: null,
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
    case SET_LOGGED_USER_INFO:
      return {
        ...state,
        currentUserInfo: { ...state.currentUserInfo, ...action.data },
      }
    case SET_LOGGIN_PROCESS_STATUS: 
      return {
        ...state,
        loginProcessStatus: action.isInProcess,
      }
    case SET_CAPTCHA_URL: 
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      }
    default:
      return state;
  }
}

export default authReducer;