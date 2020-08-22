import React from 'react';
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
import { usersAPI, followAPI } from '../../../api/api';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toFirstPage();
    this.props.setLoadingStatus(true);

    usersAPI.getUsers(this.props.usersShownNumber, 1)
      .then(data => {
        this.props.setUsersTotal(data.totalCount);
        this.props.setUsers(data.items);
        this.props.setLoadingStatus(false);
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.switchPage(pageNumber);
    this.props.setLoadingStatus(true);
    usersAPI.getUsers(this.props.usersShownNumber, pageNumber)
      .then(data => {
        this.props.setUsers(data.items);
        this.props.setLoadingStatus(false);
      })
  }

  toggleFollow = (isFollowed, id) => {
    if (!isFollowed) {
      followAPI.follow(id).then(data => {
        if (data.resultCode === 0) {
          this.props.toggleFollowTwo(id);
        }
      })
    } else {
      followAPI.unfollow(id).then(data => {
        if (data.resultCode === 0) {
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

