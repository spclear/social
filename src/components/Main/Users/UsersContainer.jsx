import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { toggleFollow, changePage, getUsers }
  from '../../../redux/thunkCreators';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.stateInfo.usersShownNumber);
  }

  onPageChanged = (pageNumber) => {
    this.props.changePage(pageNumber, this.props.stateInfo.usersShownNumber);
  }

  render() {
    return (
      <Users
        {...this.props.stateInfo}
        toggleFollow={this.props.toggleFollow}
        onPageChanged={this.onPageChanged}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stateInfo: {
      users: state.usersPage.serverUsersList,
      usersShownNumber: state.usersPage.usersShownNumber,
      usersTotal: state.usersPage.usersTotal,
      currentPage: state.usersPage.currentPage,
      isLoading: state.usersPage.isLoading,
      inFollowingProgress: state.usersPage.inFollowingProgress,
    },
  }
}
const actionCreators = {
  toggleFollow,
  changePage,
  getUsers,
}

export default compose(
  connect(mapStateToProps, actionCreators),
  withAuthRedirect,
)(UsersContainer)

