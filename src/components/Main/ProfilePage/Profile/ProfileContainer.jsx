import { connect } from 'react-redux';
import Profile from './Profile';

let mapStateToProps = (state) => {
  return {
    currentUser: state.profilePage.currentUser,
    getFullName: id => state.usersPage.getFullName(id),
    getAvatar: id => state.usersPage.getAvatar(id),
    getInfo: id => state.usersPage.getInfo(id),
  }
}

const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;