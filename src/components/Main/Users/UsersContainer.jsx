import { connect } from 'react-redux';
import { toggleFollow, setUsers } from '../../../redux/actionCreators';
import Users from './Users';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.usersList,
    getAvatar: (id) => state.usersPage.getAvatar(id),
  }
}

const actionCreators = {
  toggleFollow,
  setUsers,
}

const UsersContainer = connect(mapStateToProps, actionCreators)(Users);

export default UsersContainer;