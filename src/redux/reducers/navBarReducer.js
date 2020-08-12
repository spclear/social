import friends from '../Data/friendsData';

let initialState = {
  friends: friends,
};

const navBarReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  return state;
}

export default navBarReducer;