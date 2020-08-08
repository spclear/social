import React from 'react';
import FriendsBar from './FriendsBar';

const FriendsBarContainer = (props) => {
  const state = props.store.getState();
  const friendsList = state.navBar.friends;

  const getName = props.store.getName.bind(props.store);
  const getAvatar = props.store.getAvatar.bind(props.store);

  return (
    <FriendsBar
      friendsList={friendsList}
      getName={getName}
      getAvatar={getAvatar}
    />
  )
}

export default FriendsBarContainer;