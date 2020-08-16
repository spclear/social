import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import Users from './Users';
import {
  toggleFollowTwoAC,
  setUsersAC,
  setUsersTotalAC,
  switchPageAC,
  toFirstPageAC,
}
  from '../../../redux/actionCreators';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toFirstPage();
    Axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersShownNumber}&page=1`)
      .then(response => {
        this.props.setTotal(response.data.totalCount);
        this.props.setUsers(response.data.items);
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.switchPage(pageNumber);
    Axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersShownNumber}&page=${pageNumber}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (
      <Users
        users={this.props.users}
        toggleFollow={this.props.toggleFollow}
        onPageChanged={this.onPageChanged}
        currentPage={this.props.currentPage}
        usersTotal={this.props.usersTotal}
        usersShownNumber={this.props.usersShownNumber}
      />
    )
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

