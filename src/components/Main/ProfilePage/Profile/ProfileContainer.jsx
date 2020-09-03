import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Profile';
import { compose } from 'redux';
import { getUserProfile, getCurrentUserStatus, updateCurrentUserStatus, authUser, }
  from '../../../../redux/thunkCreators';


class ProfileContainer extends Component {
  componentDidMount() {
    const urlId = this.props.match.params.userId;
    this.props.getUserProfile(urlId, this.props.authorizedUser);
    this.props.getCurrentUserStatus(urlId || this.props.authorizedUser);
  }

  render() {
    return (
      <Profile
        {...this.props}
        shownUser={this.props.shownUser}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authorizedUser: state.profilePage.authorizedUser,
    shownUser: state.profilePage.shownUser,
    currentUserInfo: state.profilePage.currentUserInfo,
    currentUserStatus: state.profilePage.currentUserStatus,
    isLoading: state.usersPage.isLoading,
  }
}
const actionCreators = {
  getUserProfile,
  getCurrentUserStatus,
  updateCurrentUserStatus,
  authUser,
}

export default compose(
  connect(mapStateToProps, actionCreators),
  withRouter
)(ProfileContainer);