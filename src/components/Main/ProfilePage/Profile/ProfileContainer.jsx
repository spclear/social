import { connect } from 'react-redux';
import Profile from './Profile';

let currentUserId = "641006348";

let mapStateToProps = (state) => {
  return {
    name: state.usersPage.getFullName(currentUserId),
    avatar: state.usersPage.getAvatar(currentUserId),
  }
}

const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;