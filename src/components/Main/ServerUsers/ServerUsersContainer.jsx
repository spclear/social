import { connect } from 'react-redux';
import { toggleFollowTwoAC, setUsersAC, setUsersTotalAC, switchPageAC, toFirstPageAC }
  from '../../../redux/actionCreators';
import Users from './Users';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.serverUsersList,
    usersShownNumber: state.usersPage.usersShownNumber,
    usersTotal: state.usersPage.usersTotal,
    currentPage: state.usersPage.currentPage,
  }
}
  
const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: id => dispatch(toggleFollowTwoAC(id)),
    setUsers: users => dispatch(setUsersAC(users)),
    setTotal: number => dispatch(setUsersTotalAC(number)),
    switchPage: number => dispatch(switchPageAC(number)),
    toFirstPage: () => dispatch(toFirstPageAC()),
  }
}

const  ServerUsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default ServerUsersContainer;