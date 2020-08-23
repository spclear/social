import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { toggleFollow, changePage, getUsers }
  from '../../../redux/thunkCreators';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.usersShownNumber);
  }

  onPageChanged = (pageNumber) => {
    this.props.changePage(pageNumber, this.props.usersShownNumber);
  }

  render() {
    return (
      <Users
        users={this.props.users}
        toggleFollow={this.props.toggleFollow}
        currentPage={this.props.currentPage}
        usersTotal={this.props.usersTotal}
        usersShownNumber={this.props.usersShownNumber}
        isLoading={this.props.isLoading}
        inFollowingProgress={this.props.inFollowingProgress}
        onPageChanged={this.onPageChanged}
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
    inFollowingProgress: state.usersPage.inFollowingProgress,
  }
}
const actionCreators = {
  toggleFollow,
  changePage,
  getUsers,
}

export default connect(mapStateToProps, actionCreators)(UsersContainer);

