import { connect } from 'react-redux';
import Profile from './Profile';

let currentUserId = "641006348";

let mapStateToProps = (state) => {
  return {
    name: state.profilePage.getFullName(currentUserId),
    avatar: state.profilePage.getAvatar(currentUserId),
  }
}

const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;