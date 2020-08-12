import { connect } from 'react-redux';
import FriendsBar from './FriendsBar';

let mapStateToProps = (state) => {
  return {
    friendsList: state.navBar.friends,
    getName: (id) => {
      return state.profilePage.getName(id);
    },
    getAvatar: (id) => {
      return state.profilePage.getAvatar(id);
    }
  }
}

const FriendsBarContainer = connect(mapStateToProps)(FriendsBar);

export default FriendsBarContainer;