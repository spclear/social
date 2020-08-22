import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import Users from './Users';
import {
  toggleFollowTwo,
  setUsers,
  setUsersTotal,
  switchPage,
  toFirstPage,
  setLoadingStatus,
}
  from '../../../redux/actionCreators';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toFirstPage();
    this.props.setLoadingStatus(true);
    Axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersShownNumber}&page=1`, {
        withCredentials: true,
      })
      .then(response => {
        this.props.setUsersTotal(response.data.totalCount);
        this.props.setUsers(response.data.items);
        this.props.setLoadingStatus(false);
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.switchPage(pageNumber);
    this.props.setLoadingStatus(true);
    Axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersShownNumber}&page=${pageNumber}`, {
        withCredentials: true, 
      })
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setLoadingStatus(false);
      })
  }

  toggleFollow = (isFollowed, id) => {
    if (!isFollowed) {
      Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
        withCredentials: true,
        headers: {
          "API-KEY": "83ee89dc-1391-4de4-9c05-ed1d5e1459ce",
        },
      }).then(response => {
        console.log(response);
        if (response.data.resultCode === 0) {
          this.props.toggleFollowTwo(id);
        }
      })
    } else {
      Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true,
        headers: {
          "API-KEY": "83ee89dc-1391-4de4-9c05-ed1d5e1459ce",
        },
      }).then(response => {
        console.log(response);
        if (response.data.resultCode === 0) {
          this.props.toggleFollowTwo(id);
        }
      })
    }
  }

  render() {
    return (
      <Users
        users={this.props.users}
        toggleFollow={this.toggleFollow}
        onPageChanged={this.onPageChanged}
        currentPage={this.props.currentPage}
        usersTotal={this.props.usersTotal}
        usersShownNumber={this.props.usersShownNumber}
        isLoading={this.props.isLoading}
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
    isLoading: state.usersPage.isLoading,
  }
}
  
const actionCreators = {
  toggleFollowTwo,
  setUsers,
  setUsersTotal,
  switchPage,
  setLoadingStatus,
  toFirstPage,
}


export default connect(mapStateToProps, actionCreators)(UsersContainer);

