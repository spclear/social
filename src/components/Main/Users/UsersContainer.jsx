import Users from './Users';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.usersList,
    getFullName: (id) => {
      return state.usersPage.getFullName(id);
    }
  }
}
  
let mapDispatchToProps = (dispatch) => {
  return {
  
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;