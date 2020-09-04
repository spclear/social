import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { toggleFollow, changePage, getUsers }
  from '../../../redux/thunkCreators';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import * as selectors from '../../../redux/selectors';

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
      users: selectors.getServerUsersList(state),
      usersShownNumber: selectors.getUsersShownNumber(state),
      usersTotal: selectors.getUsersTotal(state),
      currentPage: selectors.getCurrentPage(state),
      isLoading: selectors.getIsLoading(state),
      inFollowingProgress: selectors.getInFollowingProgress(state),
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

