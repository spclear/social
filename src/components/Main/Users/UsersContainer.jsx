import { connect } from 'react-redux';
import { toggleFollowAC, setUsersAC } from '../../../redux/actionCreators';
import Users from './Users';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.usersList,
    getAvatar: (id) => state.usersPage.getAvatar(id),
  }
}
  
const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: id => dispatch(toggleFollowAC(id)),
    setUsers: users => dispatch(setUsersAC(users)),
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;