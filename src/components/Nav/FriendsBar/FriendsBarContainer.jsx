import { connect } from 'react-redux';
import FriendsBar from './FriendsBar';

let mapStateToProps = (state) => {
  return {
    friendsList: state.navBar.friends,
    getName: id => state.usersPage.getName(id),
    getAvatar: id => state.usersPage.getAvatar(id),
  }
}

const FriendsBarContainer = connect(mapStateToProps)(FriendsBar);

export default FriendsBarContainer;