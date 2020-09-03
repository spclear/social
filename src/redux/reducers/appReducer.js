const SET_INITIALIZATION_STATUS = "SET-INITIALIZATION-STATUS";

const initialState = {
  isInitialized: false,
}

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZATION_STATUS:
      return {
        ...state,
        isInitialized: true,
      }
    default:
      return state;
  }
}

export default authReducer;