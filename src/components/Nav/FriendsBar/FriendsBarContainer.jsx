import React from 'react';
import FriendsBar from './FriendsBar';

const FriendsBarContainer = (props) => {
  const state = props.store.getState();
  const friendsList = state.navBar.friends;

  const getName = state.profilePage.getName.bind(state.profilePage);
  const getAvatar = state.profilePage.getAvatar.bind(state.profilePage);

  return (
    <FriendsBar
      friendsList={friendsList}
      getName={getName}
      getAvatar={getAvatar}
    />
  )
}

export default FriendsBarContainer;