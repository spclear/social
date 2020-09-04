import { connect } from 'react-redux';
import FriendsBar from './FriendsBar';
import * as selectors from '../../../redux/selectors';

let mapStateToProps = (state) => {
  return {
    friendsList: selectors.getFriendsList(state),
    getName: selectors.getNameGetter(state),
    getAvatar: selectors.getAvatarGetter(state),
  }
}

const FriendsBarContainer = connect(mapStateToProps)(FriendsBar);

export default FriendsBarContainer;