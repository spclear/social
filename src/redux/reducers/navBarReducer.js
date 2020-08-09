import friends from '../Data/friendsData';

let initialState = {
  friends: friends,
};

const navBarReducer = (state = initialState, action) => {
  let newState = state;

  return newState;
}

export default navBarReducer;